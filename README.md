# tcgCardCounter

This little `JS` mod provides your site with a tool to count cards in the trade posts and in eTCG. Installation and customization is (or should be) very easy. If you have any problems, please send in an [issue](https://github.com/savwiley/tcgCardCounter/issues) or feel free to contact me on Discord.

📥 [Download Files](https://github.com/savwiley/tcgCardCounter/archive/refs/heads/main.zip)

🛠️ [How to install in Trade Posts](https://github.com/savwiley/tcgCardCounter#install-in-trade-posts)

⚒️ [How to install in eTCG](https://github.com/savwiley/tcgCardCounter#install-in-etcg)

## Install in Trade Posts

![On site button](https://cdn.discordapp.com/attachments/697494609038671982/822934193968250890/Untitled-1.png)
![On site counter](https://cdn.discordapp.com/attachments/697494609038671982/822934194056724480/Untitled-2.png)

1. Upload `tradeCount.js` to your site.
 
2. On whatever pages you want the script to appear (or in your `footer.php` if you have one), input this before the last `</body>` tag with a link to the script you just uploaded:

> `<script src="SITE-URL/tradeCount.js"></script>`

3. Wherever you'd like your button to appear on your site, input the html below. I personally put mine at the top of my trading page and in trading piles.

> `<button class="cardCountButton">Card Counter</button>`

4. Now we add the css. Feel free to use this time to customize the look to however you prefer. Once that's done, it's time to install. You can either take the code that's in `tradeCountStyle.css` and paste it into the stylesheet you're already using (recommended) or you can upload the file to your site and link it in your `header.php` or at the top of any file you're using the mod. It would look something like:

> `<link rel="stylesheet" type="text/css" href="tradeCountStyle.css">`

5. Don't forget to reupload any edited file to your site.

6. That should do it. If you have any problems, please send in an [issue](https://github.com/savwiley/tcgCardCounter/issues).

## Install in eTCG

![eTCG button](https://cdn.discordapp.com/attachments/697494609038671982/822934179196174386/Untitled-3.png)
![eTCG counter](https://cdn.discordapp.com/attachments/697494609038671982/822934187555684382/Untitled-4.png)

1. Upload `eTradeCount.js` to your site.

2. In your site's eTCG folder, download `footer.php`.

3. Make quadruple sure you back this file up to its current version BEFORE we start messing with it.

4. Scroll down to the bottom and add this before the last `</body>` tag with a link to the script you just uploaded:

> `<script src="SITE-URL/eTradeCount.js"></script>`

5. Reupload your new `footer.php` file to the eTCG folder on your site. 

6. If something goes wrong, reupload the old `footer.php` you backed up a moment ago and make sure eTCG still works like it's supposed to before trying to fix the mod. If the problem persists, please send in an [issue](https://github.com/savwiley/tcgCardCounter/issues). 
