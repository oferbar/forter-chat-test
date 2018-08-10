
# Chatbot Test

Based on chat demo for socket.io

## How to use

```
$ cd forter-chat-test
$ npm install
$ cd chat
$ npm install
$ npm start
```

And point your browser to `http://localhost:3000`. Optionally, specify
a port by supplying the `PORT` env variable.

## Features

- Multiple users can join a chat room by each entering a unique username on website load.
- Users can type chat messages to the chat room.
- A notification is sent to all users when a user joins or leaves the chatroom.
- The BOT will save the last user answer to a question.
- The BOT will provide a user answer to a known question with probability of 60%.
- 40% of the times, the BOT will provide a "funny" answer.
- Try questions like:
    * What day is it today?
    * What is your quest?
    * What is your favourite color?
    * Who are you?
    * How do you know I’m mad?
    
