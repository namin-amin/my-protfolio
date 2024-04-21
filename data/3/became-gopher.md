# How i was became a Gopher

! Disclaimer, iam no .NET pro either iam still starting my developer journey.

Ive been writing code professionaly in C# for more than 2.5 year now.
Its been a great journey .NET provides great ecosystem for application development. As it is most used in Enterprise the libraries and tools that are provided in the opensource world are also topnotch.

And nobody can contest the fact that Visual studio makes the development a pleasure with great features especially debug and testsuite.

But few months ago i was planning on developing a frontend chat-app with the shiny new .NET-Blazor webassembly. So opened my pc and started searching for different ways to implement a chat app. I shortlisted few as below.

1) Use SignalIR in backend.
2) Using Some relatime Chat SASS providers.
3) Use Websockets directly instead of SignalIR.
4) Use Firebase/Superbase etc.

Since I did not want this project to go the side-project graveyard in my pc i wanted get it done faster so the last option that is using solutions like Firebase/Superbase seemed like the best option.

But again firebase was out my reach as i did not want to shell out cash for that.
Superbase was fine but it was too overwelhming for me (might be a skill issue 😁).
So search started again then i came across **[pocketbase](https://pocketbase.io/)**.

<img src="data/3/pblogo.svg" alt="pocketbase" width="200"/>

Something hit me when i read explored the banner on the pocketbase website which went like this

***Open Source backend
for your next SaaS and Mobile app
in 1 file***

Wow 😍 this is exactly what i was looking for with realtime supoort and all i could build my app with this. But one problem there was no client in C# i had to implement the things in with HTTP calls to the pocketbase. I tried it but was not able to go far.

So what did i do ? simple i searched for **nuget** for a client.I got 2-3 client but for some reason i was not able to get realtime communication working with a blazor app with any of them.

Next i decided to write my own client library for my cause. Its still up and you can find it here [pocketbase.NET](https://www.nuget.org/packages/pocketbase.NET).
I have a blog on how i solved the problem of realtime [here](https://navaneesh-amin.in/#/blogdetail?file=data/1/Blazor_SSE.md). While writting the library i had to know the internal working of the pocketbase app. So decided to look inside the code.

I believe that programming knowledge is language agnostic and if you have learnt the basics properly you should be able to get going with any new language easily.
I was right i was able to read throught the basic flow of the program and able to understand the architecture.

<img src="data/3/gopher.png" alt="gopher" width="200"/>

But i did not go far since i was not aware of channels and receiver functions were not something i was familiar coming from C# land.
So i started to learn golang from the golang playground. Soon i was enjoying writing golang. Especially the cuncurrency using channels was very refreshing i could comprehend even the inner workings of this pattern (it took a lot of reading and videos , presentations to undertsnd async/await innerworkings in C#).

But iam a person who believes that you learn proper progrmming by implementing somethigg.So what did i do ? ofcoarse i ditched my idea of writing chat app in blazor-pocketbase i implemented custom SSE server in golang-svelte 😂😂😂.

So thats how i became a kind of Gopher.
