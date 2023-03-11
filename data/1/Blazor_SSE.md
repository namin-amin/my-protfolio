# Recieving SSE Messages In .Net Blazor

dotnet blazor is a quite great framework letting C# developers Write Frontend code by mixing and Matching C# with HTML without requirement of touching javascript code.

JS interopbility is quite great when getting into nitty gritty Browser specific API's and fetures.But it ultimately defeats the purpose of working with C# that is not writing any JS for few C# Developers.

Recently i wanted to tryout [pocketbase](https://pocketbase.io/) which is wonderfull BAF(backend as a file)😉 with Blazor.

<img src="data/1/pblogo.svg" alt="drawing" width="200"/> <img src="data/1/blazlogo.png" alt="drawing" width="200"/>

So as usual i went to **nuget** and found one package.
But when trying to implement _Realtime_ Feature of pocketbase it seemed not to work in .Net Blazor.It was working fine in winforms ,.NET MAUI but not in blazor.

So I decided to implement a cleint library myself. But as i sat down to implement the Realtime service my library went and got stuck because of same problem.So i invesigated serached all kinds of forums and finally sat down to read the docs there i found what i was doing wrong.

## The Issue

Pocketbase uses [SSE(server sent events)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) to implement its Realtime service.

Its Basically a Its a one way communication from server to cleint.
The events are steamed.So the main issue was enablig **_stream_** response for HTTP request is required.

You can easily enable this in .NET blazor by using importing **_Microsoft.AspNetCore.Components.WebAssembly.Http_**
namespace and using a extension methid provided there

```C#
using Microsoft.AspNetCore.Components.WebAssembly.Http;

var httpmessage =  new HttpRequestMessage();
httpmessage.SetBrowserResponseStreamingEnabled(true);

```

using the above code worked it solved the realtime issue in my cleint sdk.
now the HttpCleint could keep reading stream and i could build a logic in which i could easily read the stream contents and process them.

You can find more info about the API in the official [microsoft docs](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.components.webassembly.http.webassemblyhttprequestmessageextensions.setbrowserresponsestreamingenabled?view=aspnetcore-7.0).

## Lesson to learn

#### Read Docs first😂
