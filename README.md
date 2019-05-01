# IABA: Inning Adjusted Batting Average

Visit http://157.230.226.56/ to access the site!

You have to decompress the data.zip file to get csv files needed in the jupyter notebook

# Link to Video

Visit https://www.youtube.com/watch?v=_1cYv1ZPefw&feature=youtu.be to see the video presentation.

# Description
There are many batting statistics in baseball that can help managers and team owners to predict and help them made decisions during a season. However, baseball is a really complex game and the current statistics do not cover all aspects of the game. Having this in mind, we decided to work on a statistic that could help managers to make decisions during close games. Many games during the season go to extra innings which cause the use of many pitchers for a game. This affect the extra inning game and also the game in the next day because many of the pitchers will be tired and not available to pitch the next day. Based on the article Exploring extra innings by Devan Fink, extra inning games make up anywhere from 7.6 percent to 10 percent of total games played in an entire season. To solve the extra innings problem, managers should be able to pick players that will help the team to win the game in regular innings or playing the less amount of extra innings. We decided to create a statistic that adjusted the batting average based on the inning when a player got a hit, so that a player who can get hits later in the game will have a higher score than a player with hits at the beginning of the game. The formula that we used is:
<p align="center">
  <strong><ins>1*H1+2*H2+3*H3+...+9*H9</ins><br>
   AB(1st-9th inning)</strong>
</p>
With this statistic, managers could see which players have a better performance late in the game which could help the team win close games. For example, if a team is tied in the 9th inning, the manager could use the IABA statistic to find a pinch hitter that would have a higher probability to get a hit to get on base or bat a run in. Other statistic like batting average or on-base percentage show players that can get hits or walks, but they do not show when in the game they get them. A player might have a high batting average, but he might get most of his hits early in the game, which means that he might not be as effective if he is trying to get a hit late in the game.
 
# Correlation to other statistics
| Statistic name | Correlation with IABA | P-val |
|---|---|---|
| BA | 0.7298994411504203 | 1.0874030770893327e-240 |
| OBP | 0.46673904191644827 | 4.5996568389469993e-79 |
| OPS | 0.4472021248079238 | 5.675155491600669e-72 |
| Team Wins | 0.11882304538122929 | 0.1961488642999242 |
| Baseball Reference War | 0.34727003401060763 | 4.279123724009032e-50 |

### Analysis of Correlation with other Stats
At first glance at the correlation table it’s apparent that IABA correlates with BA, OBP, OPS,the Baseball Reference Offensive War metric and does not correlate well with team wins. It’s no surprise that IABA correlates with the regular batting average metric with a strong positive correlation of 0.73, since IABA is simply BA with additional weights for the hits in a inning. This is not the most useful statistic to compare to, but it was calculated regardless to ensure that our IABA calculations made sense (basically BA/IABA correlation served as sanity check for our own calculations). IABA has a moderate correlation of 0.467 with OBP at a p-value (4.59e-79) which strongly rejects the null hypothesis that no correlation exists when held to a 0.05 significance level. IABA is a weighted extension to BA, which relies on number of hits as part of the calculation, and OBP is a measurement of how frequently a batter gets on base (where hits are 1 component). If a batter gets more hits they are going to get on base more often (by definition of a hit), and thus will have a higher OBP. If a batter gets more hits quite simply they will have a higher IABA. This correlation is relatively straightforward, and the same analysis can be applied  to OPS (OBP + slugging) which has a moderate correlation of 0.45. 

The Pearson correlation between the Team IABA and Team Wins is roughly 0.12, with a p-value of 0.19, so we fail to reject the null hypothesis that no correlation exists. To expand upon this it’s important to clarify how the team IABA was calculated. The same formula above was applied, however “H1” denotes how many hits the entire team got in the first inning, and so on so forth. The same is applied for at bats. While IABA can be a useful offensive metric for analyzing how well a player hits in later periods of a game, it is intended for specialized situations such as pinch hitting. It is not intended as “catch-all” offensive metric, especially when applying it to a team since one has to factor in the variance in offensive ability amongst members of a team. While 7.6-10% of games consist of extra innings, the vast majority do not. This helps explain the lackluster correlation between IABA and wins, since if the majority of games are “determined” before the later innings of a game, having an offensive stat which is biased towards valuing players with hits in later innings likely does not correspond with that. Furthermore, even a team with high offensive stats doesn’t account for all the wins/losses that team have since defensive ability is still important. 

The correlation value between IABA and the Baseball Reference WAR is 0.35, with a p-value of 4.3e-50 so the null is rejected when held to a significance level of 0.05. This makes sense since the Baseball Reference WAR calculation uses batting runs above average which is calculated from wOBA which weighs different base hits against the league average as well as factors in the player positions (https://www.baseball-reference.com/about/war_explained.shtml).
In general, it’s clear that IABA correlates well with other offensive metrics, due to underlying calculations relying on hits; however, IABA doesn’t correlate with metrics such as wins since, it is particularly biased towards events in later innings and many lead changes that result in wins don’t occur in late innings.

# Distribution of Offensive Stats
<p align="center">
  <h5 align="center"> IABA </h5>
</p>
<p align="center">
  <img src="iaba.png" title="IABA">
</p>
<p align="center">
  <h5 align="center"> BA </h5>
</p>
<p align="center">
  <img src="ba.png" title="BA">
</p>

To help provide some more context, we’ve provided the distribution of offensive metrics like BA and IABA so you can visualize the spread of the metric amongst all the players. When performing the Shapiro Wilk test for normality, both distributions  reject the null that the distribution is normal (despite IABA appearing to be normally distributed on the surface). This means that standard methods like z-score and confidence intervals cannot be applied.
