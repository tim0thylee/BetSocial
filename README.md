# BetSocial

A social betting app that keeps track of all registered bets with your friends. Never lose track of another bet again!

The user must be logged in to access the app. All routes are private so without authentication the user is redirected to the Login Screen

![login](https://github.com/tim0thylee/BetSocial/blob/master/images/login.JPG)

If the user has never registered, they can create at an account on the registration page.

![registration](https://github.com/tim0thylee/BetSocial/blob/master/images/register.JPG)

Whether the user completes registration or logs in with their current login information, they will be brought to their profile page. The profile page displays the user's username, win-loss record, the current bets open and their friends list. All bets and friends are clickable links that will navigate the user to either the bet detail page or the friend's profile page. Also, once logged in, the user has access to the tablist that provides links to the profile page, all users page, or the make a bet page.

![profile](https://github.com/tim0thylee/BetSocial/blob/master/images/profile.JPG)
![profile2](https://github.com/tim0thylee/BetSocial/blob/master/images/profile2.JPG)

If you click on a bet, it will bring the user the bet details page. On this page, the responsible parties have the ability to close the bet. If there is a discrepancy between who the winner is, only the validator has the ability to change the winner of the closed bet.

![bet-detail](https://github.com/tim0thylee/BetSocial/blob/master/images/bet%20detail.JPG)

If the user clicks on the 'users' tab, it displays all users. On this page, the user is  able to add any of the registered users in the community.

![users](https://github.com/tim0thylee/BetSocial/blob/master/images/users.JPG)

If the user clicks on the 'bets' tab, it will bring them to the page where the user can create a bet. It also displays all registered bets from all users. The "Better" is automatically set to the logged in user. There is a drop-down menu for the rest of the registered users for "Better Two". The remaining "Wager" and "Description" fields are self-explanatory and are also required. The one optional field is for the "Validator". The role of the validator is explained above.

![bets](https://github.com/tim0thylee/BetSocial/blob/master/images/makebet.JPG)
