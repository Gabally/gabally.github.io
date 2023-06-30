---
title: "Gaining access to a router trough DNS Rebinding"
date: 2023-06-30T14:40:23+02:00
draft: false    
---

Today i was thinking about a way to gain access to devices inside a LAN trough the browser, when i remembered that DNS rebinding attacks still exist, and still work in a lot of browsers. 

The initial idea was to build a web proxy to make requests to internal web services trough the victim's browser, which would exchange request data trough a websocket with the attacker's server. But today i was feeling lazy, so i decided to find an even simpler way.

## The key: router's web-interfaces

i then remebered that if i simply had access to the router web interface i could just port forward any device and gain access to it. Credentials wouldn't be a problem most of the time, since the average non-tech-savvy user never changes the router's admin password.

## An example (investigating my router's login process)

So, i started looking at my router's web interface requests during login, and not so long after i discovered that the session was stored in an auth cookie.

I also noticed that the cookie never changed between different logins. This gave me the suspicion that the login cookie could just be generated, without even making a login request during the attack. After trying to decode it in different formats i discovered that is was just the base-64 encoded password.

## Crafting a request to enable the router remote management

Now all that was left was to craft a dns rebinding payload to mimic the request that a normal user would send to expose the router to the internet

## Demo
