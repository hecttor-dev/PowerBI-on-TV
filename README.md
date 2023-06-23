# [PowerBi-on-TV](https://github.com/hecttor-dev/PowerBI-on-TV/)

This is a project to help you display your PowerBI reports on your TV. It works by loading PowerBI links in an iframe, and them changing the link in the iframe every 90 seconds. That way, you can have multiple reports and display them all. This is a solution i came up with when i was requested to display informative reports i made on a TV. There are paid solutions to do this, but they're paid (not ideal) and you need to upload your report public link to the place you're the service from. This solution i came uo with is 100% free and your links never leave your machine, so there's no risk on private data leaking.

## Getting Started

The installation process is basically:
1. Turning your machine into a local web-server (we will do this by installing xampp)
2. Downloading all the files from this repo, and changing the urls.json file to include your PowerBI reports URLs.
3. Copying all the files to the htdocs folder inside the xampp folder.
4. Getting your local IP address so you can access your web server in your TV.
5. Done :-)

This project was made to be used on Windows. If you're running linux then you probably don't even need a tutorial, just get the files and do your thing.

* Windows: 
First you need to set up a local web-server on your machine.
You can do so by downloading and installing [xampp](https://www.apachefriends.org/download.html)
In the installtion process, you can customize what you want to install. You really only need Apache for this.

After the installation is done, you can download all the [files] in ().

Then you need to get all your report links inside the urls.json
To do so, first you need to [publish to web](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web)
(You don't need a premium or paid account to do this)

    In case you have a lot of pages in your report, you will need to copy the "ReportSection" parameter from the URL.
    o do so, click on the name of your report in your workspace. 
    Them, in your browser, you will notice that in the current URL you're in, the very last words are "ReportSectin?BUNCHofCharaters?experience=power-bi"
    You will need to go into each one of your pages and copy the value of the "ReportSection" parameter, then you can add in the end of your base URL that you got from publishing to web
    "&pageName=ReportSectionNAOFNAOSFNBAOFUB" (the characters here are just for example purposes)
    If you don't have multiple pages you don't need to do any of this

With your URLs on hand, you can them paste them inside the urls.json file, just replace the one mockup line in there with yours.
Note that you do need to put all the urls inside quotation marks (" "), and if you have more than one, the lines need to end with a comma (,) except for the last line.

After the urls.json file is done you're basically all set, that was the hardest part of all this.
Now you need to copy all the files you downloaded and your urls.json file to your xampp htdocs folder (99% of the times is in "C:/xampp/htdocs" if you didn't specify another location during the installation)

Then you can test your installation by writing "localhost/www/index.htmL" into your web browser (remember to start the http server in xampp admin control panel).
You should see all your reports in your browser. You can now access them in your TV

To do so, you need to get your local IP address. You can get it by opening the command prompt (Win + R > cmd) and writing "ipconfig" in the terminal. It's the IPV4 you need
With your IP in hands, you can now open the browser in your TV and write the "IP/www/index.html" and you're done.

## Need help?

If you need help or want to contrib just open an issue or do a pull request with your code.

## Code of Conduct

You can do whatever you want as long as you don't end up selling this and making profit on it. My intentions are to help people solve a problem, not to sell a solution. 

## License

See the [LICENSE](https://github.com/hecttor-dev/PowerBI-on-TV/blob/main/LICENSE) file.
