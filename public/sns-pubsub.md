# *The Day I Finally Understood PubSub*

## **A humble beginning**

Online communication is what drives the modern world. Little packages of information floating from sources like your “Add to cart” button to Amazon’s servers; which respond nearly instantaneously in kind. However; online communication isn’t easy. My first experience with a websocket interaction was fairly early in my decision to take learning programming seriously. After learning about Socket.IO one afternoon while looking for learner projects, I found myself way in over my head as I tried to piece together Stack Overflow code with my own creation of a ‘Rock-Paper-Scissors’ game so that two users could play together, from different web browsers. Many hours later, I had my first websocket pushing a message and a real console.log() coming through on the other end. By no means was the code “clean code”, but the message got through. Transition to building API’s and websockets in a beautiful orchestration of data being tossed around in a live service application. I felt as though I understood the system and how it communicated with clients.

Then came the word “pubsub”.  
 *![PubSub meme](/images/pubsub.png)*

### **An honest truth**

For a long time, pubsub lived in my head as one of those phrases you nod along to in architecture discussions. You know the move. Someone draws boxes, arrows multiply like rabbits, and everyone agrees this is “the scalable solution.” Meanwhile, internally, your brain is whispering: *Yes, but… who’s actually talking to whom? And how does the message know where to go?*

 

Over the last couple of months, the systems I’ve been working on have been evolving in a very specific way: from a single application into a set of independently running services deployed across Kubernetes pods. Something that I, myself, knew very little about as the transition occurred. Until it had a direct effect on me. The old “just call a function” approach quietly stopped working.

---

## **The Problem: When “Just Send the Message” Stops Working**

In a live service application that communicates with clients over WebSockets, everything feels simple… until it isn’t.

Imagine a user takes an action. Maybe they click a button, submit a form, or trigger some state change. That action needs to do at least two things:

1. Return an immediate response so the UI feels quick and speedy.  
2. Notify one or more connected clients (possibly *other* users) that something has changed.

When everything runs in a single process, you can keep it simple. You keep some in-memory state. You loop over active WebSocket connections. You send messages directly. It feels cozy. I felt cozy.

Now, we introduce Kubernetes.

Suddenly, your application isn’t *one thing*. It’s a small constellation of pods (Kubernetes-managed containers running your code), any of which might receive the request, and none of which know who else is currently connected. One pod receives the API call. Another pod owns the WebSocket connection of the caller. A third is busy doing background work and humming quietly to itself.

At this point, shouting across the room no longer works.

---

## **Enter PubSub (Cue Confusion)**

So, the journey of ensuring prolonged communication began. Diving into Pubsub head on\!

PubSub (Publish/subscribe) systems solve a very specific problem: **decoupling** senders from receivers. The publisher doesn’t care who receives the message. The subscribers don’t care who sent it. Everyone agrees on the shape of the message and the topic it belongs to.

That’s the theory. The practice… well, that’s where my brain locked up for a while.

Using Amazon Web Services PubSub tooling, specifically AWS SNS. Means thinking in terms of topics, subscriptions, delivery protocols, retries, dead-letter queues, and permissions. None of these concepts are individually hard. Collectively, they form a mental maze.

I spent a lot of time staring at the AWS Console thinking, *Why is this so complicated?*  
The answer, as it turns out, is: once your app becomes distributed, communication stops being a convenience and becomes a system you have to design. It’s no longer “just send the message” anymore. It’s infrastructure.

---

## **The Day It Finally Clicked**

Eventually, I had it. The eureka moment\!   
Here’s the metaphor that saved me.

A **topic** is a train station.  

A **subscription** is a train.  

A **message** is cargo.

When a message is published (sent into a topic), it arrives at the station. Every train currently scheduled to leave that station (subscription listening to a topic) picks up a copy of the cargo and attempts to deliver it to its destination (a subscriptions endpoint). 

Some trains go to HTTP endpoints.  
Some go to queues.  
Some derail and dump their cargo into a dead-letter yard where someone can inspect what went wrong.

Unlike a train delivering cargo – Pubsub does give you the opportunity to retry a failed delivery. This is typically handled by rules that are defined in a ‘ReDrive Policy’ on the subscription. Allowing for a slow-drip of retries before finally backing off; either by forgetting the message ever existed, or moving that message into a defined DLQ (Dead-Letter-Queue). 

The publisher doesn’t track trains. The publisher doesn’t know destinations. They just drop cargo at the station and walk away.

Take a user invitation flow for example: When someone invites a teammate via an API, the publisher pod drops a 'user\_invited' message onto a 'invitations' topic. One subscription train delivers it to an SQS queue for an email service to pick up and send. Another goes to a Lambda that updates some analytics service. A third might fan out to a webhook if the invitee has integrations enabled. The API pod never knows, or cares about email servers, Lambda, or third-party APIs failing. It publishes and returns an Accepted status. Understanding this possibility came with the understanding of just how accessible Amazon's services are to one another.

---

## **SNS for API-Driven Systems**

AWS SNS shines when you want clear responsibility boundaries.

Most recently, I have used this in a system for **API-triggered work that doesn’t need to happen immediately** and for **communication across service boundaries**. 

In a live service application, an API call should do the minimum amount of work necessary to respond. Anything slow, optional, or downstream should happen *after* the response is sent. Otherwise the user is left waiting for a response that may be stuck in a queue; or from the users perspective, gone into the Ether. SNS lets you publish an event like “something happened”. This event will return the success of the message being sent back quickly to the user, and let other systems react independently.

Remember, Pubsub is not responsible for ultra-low-latency WebSocket fan-out inside the cluster. For truly fast and optimal WebSocket broadcasts to thousands of clients, teams layer something like Redis Pub/Sub, ElastiCache, or a dedicated real-time service (Pusher, Ably, Socket.IO with adapter) on top which are fast, ephemeral, and excellent for shouting updates inside the building.

SNS handles the slower, fire-and-forget cross-service events.

Most recently, I have used such a system for **API-triggered work that doesn’t need to happen immediately**, and for **communication across service boundaries**. 

There are many use-cases for harnessing this power:

 **Async post-API side effects**: Validate signatures, enrich data, or kick off ML jobs after responding to the user.

 **Cross-service / cross-team notifications**: One service announces "project\_updated" without knowing who subscribes (e.g., dashboard service, audit logger, mobile push service).

 **Webhook deliveries**: Fire customer webhooks without blocking or retrying in-process.  
    
 **Delayed or batched work**: Nightly syncs, report generation, or cleanup tasks triggered by events.  
    
 **Fan-out to external systems**: Integrate with third-party tools (Slack, email, PagerDuty) without tight coupling.

In all of these cases, with a Pubsub in place, the API responds quickly, and the rest of the system reacts in its own time.

Most mature real-time apps end up using both: Redis for instant in-memory fan-out to connected WebSockets within the cluster, SNS for anything that crosses service/team/project boundaries or can tolerate seconds of delay.

---

## **Kubernetes Makes PubSub Mandatory**

Kubernetes introduces a delightful problem: **your application is no longer in one place**.

At a high level, Kubernetes is a container orchestration platform. It runs your application inside containers. It then groups those containers into pods, and takes responsibility for starting them, stopping them. Independently restarting them, and scaling them as needed. It’s designed to run the same way whether you’re on a laptop, a data center, or a cloud provider and it’s very good at that job. This is really quite amazing, but can introduce some real challenges when developing a live service application.

Kubernetes pods are ephemeral. They can be restarted at any time and duplicate horizontally. They do not share memory with one another. From Kubernetes’ perspective, your application is not *a process* but rather a fleet of processes.

This means you lose a few comforting assumptions all at once. You can no longer assume that the process handling an API request is the same process holding a client’s WebSocket connection.

Imagine a neighborhood of identical houses. They were all built from the same blueprint, so they look identical from the outside. But the people inside, the conversations happening, and everything they know can be completely different from house to house. Kubernetes gives you more houses whenever traffic increases and is able to tear some down when they’re no longer needed. 

Pubsub gives you a way to say, “This happened,” without caring who is awake or currently home to hear it. That decoupling is the only way the system can remain coherent as it scales and reshapes itself underneath you.

---

## **Subscriptions Are Where the Real Complexity Lives**

Creating a topic is easy. Publishing a message is easy. And at first glance, a subscription can look almost boring.

In Clojure, it might be declared as something as simple as:

````Clojure
(def subscriptions
 [{:topic    :user-invited
   :protocol :http
   :endpoint "/api/pubsub/handle-invite"}\])
````

When I first reached this point, I remember thinking: *That’s it?*  
 A topic, a protocol, an endpoint. How bad could it be?

This is where pubsub lulled me into a false sense of confidence.

Because that small map is carrying far more responsibility than it appears. A subscription isn’t just “where the message goes.” It’s where delivery semantics are defined. It’s where retries are decided. It’s where failures either surface or disappear.

And it’s where AWS permissions quietly decide whether anything works at all.

If SNS can’t deliver a message, it will retry. If retries fail and there’s no dead-letter queue, the message can vanish. If a queue policy is missing or misconfigured, delivery can fail silently. From the publisher’s perspective, everything looks fine. The message was “sent.” Somewhere downstream, it simply never arrived.

This is why pubsub failures are so unnerving. Nothing crashes. Nothing throws. The system just… doesn’t do the thing you expected. They demand a working knowledge of AWS; not just the APIs, but how those APIs behave when something goes wrong.

That’s also why experimentation matters. Reading the documentation helps, but watching a message fail to deliver because of a missing permission teaches you something the docs never quite can.

---

## **Testing Without Lying to Yourself**

One of the quieter challenges with SNS Pubsub is testing.

Mocking it poorly creates comforting illusions. Everything passes. Nothing works in production. This requires really understanding the AWS documentation. I certainly found myself scratching my head at some points, wondering; *What EXACTLY is Amazon expecting?* 

The testing approach that finally worked was a layered one:

 **In-memory doubles** that preserved the *shape* of pubsubs topics, subscriptions, and publishing. This way, the application code stayed honest.  
    
 **Integration tests using LocalStack**, which allowed real SNS topics and subscriptions to be created locally, following AWS’s exact rules.

A Clojure test example for a new SNS Topic in the LocalStack:

```clojure
(context "sns integration"
  (with pubsub
    (start-pubsub!
      {:impl     :sns
      :endpoint "http://localhost:4566"}))

  (it "creates topics and publishes messages"
    (let [topic (create-topic! pubsub "test-events")]
      (publish! pubsub topic {:event :ping})
      (should (topic-exists? pubsub topic))))
```
*Creating a pubsub that is local to the tests with the ‘with’ function. We can then spin one up on the LocalStack (provided that an instance is running), and use it to assert real topic creation and even that a message can be passed into it\!*

LocalStack was particularly valuable here. It validated that topic creation, subscription confirmation, IAM-style policies, and delivery all behaved the way AWS expects, importantly, before anything touched a real account. That feedback loop made a huge difference. While there is some setup involved with LocalStack, once you have it configured, it can provide a massive confidence boost for deliverable code with proper integration tests.

Fast unit tests told us the code made sense. LocalStack told us the infrastructure did. Both were necessary.

---

## **The Quiet Victory of Boring Infrastructure**

I have found, personally, there’s a moment when learning new technology where understanding replaces superstition. Pubsub crossed that line for me once I stopped imagining it as “fancy callbacks” and “magic messaging” and started seeing it as **infrastructure for selective broadcasting**, everything fell into place.

Once that clicked. Communication became easier to implement and services became easier to reason about. Failures became observable instead of mysterious. Scaling the project stopped being a scary thing to do and instead became.. boring.

And boring infrastructure is the best kind.

---

## **Final Thoughts from the Train Station**

Pubsub systems like SNS are powerful precisely because they force you to think clearly about boundaries. They punish shortcuts. They scale your architecture *and* your understanding.. eventually.

If there’s a unifying lesson in all of this, it’s that pubsub forces you to be explicit, and rewards you for being so. Explicit about ownership. Explicit about failure. Explicit about timing.

That explicitness can feel punishing at first. Especially when you’re staring at subscription configurations wondering why a message vanished into the void. But it’s also what makes distributed systems survivable.

Eventually, the station map makes sense. You know which trains leave when, where they go, and what happens when they don’t arrive.

And once you reach that point, Pubsub isn’t mysterious anymore. At least, it wasn’t for me.

I’ve come to realize that it’s just infrastructure doing its job. Quietly, predictably, and without asking you to care who’s listening.