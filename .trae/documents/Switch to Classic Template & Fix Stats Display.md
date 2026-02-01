I have switched the template from `terminal` to `classic` as requested.
The image link in `themes/manjusaka/layout/page.ejs` points to `https://raw.githubusercontent.com/Bayesianovich/Blog/assets/wakatime.svg`, which is correct.

Regarding the "no stats" issue:
1.  I verified that `wakatime.svg` in the `assets` branch is currently an empty/invalid file or has not been generated correctly yet (I tried to fetch it but it seemed empty or I just reset it).
2.  The workflow has been updated to use the `classic` template and correct branch settings.
3.  The most likely reason for the empty/missing stats is that the GitHub Action needs to run *successfully* once with the new configuration.

Please:
1.  Go to your GitHub repository -> Actions tab.
2.  Select "Generate WakaTime Stats".
3.  Click "Run workflow".
4.  Wait for it to complete (green checkmark).
5.  Refresh your blog page.

If it still shows empty, please ensure your `WAKATIME_API_KEY` in GitHub Secrets is correct and that you have coding activity recorded in WakaTime for the last 7 days.
