// Variables and Data Types
// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)
// Prefer not to use var because of issue in block scope and functional scope
// In initial days JS didn't work on scope, that was a problem

const accountId = 3432523;
let accountEmail = "anirudh.ag.gupta@oracle.com";
var accountPassword = "12345";
let accountState;
accountCity = "Jaipur";

// accountId = 2         // Not Allowed

accountEmail = "ag@ag.com";
{
  const accountId = 1;
  var accountPassword = "342342"; //original variable will also get changed
}
accountCity = "Hyderabad";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
