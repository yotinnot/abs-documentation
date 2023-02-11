# Advanced Search Options

## Operators

This type of search bar allows usings operators to search for data. The following operators are supported:

- `+` **Plus sign**

A leading or trailing plus sign indicates that this word must be present in each row that is returned.

- `-` **Minus sign**

A leading or trailing minus sign indicates that this word must not be present in each row that is returned.

::: warning Note
The - operator acts only to exclude rows that are otherwise matched by other search terms. Thus, a search that contains only terms preceded by - returns an empty result. It does not return “all rows except those containing any of the excluded terms.”
:::

- `(no operator)`

This is the default operator. It indicates that this word is optional, but the rows that contain it are ranked higher than rows that do not contain it.

- `> or <` **Greater than or less than sign**

These two operators are used to change a word's contribution to the relevance value that is assigned to a row. The > operator increases the contribution and the < operator decreases it. See the example following this list.

- `( )` **Parentheses**

Parentheses can be used to group words into subexpressions. The subexpression can be followed by an operator to change the contribution of the subexpression to the relevance value.

- `~` **Tilde**

A leading tilde acts as a negation operator, causing the word's contribution to the row's relevance to be negative. This is useful for marking “noise” words. A row containing such a word is rated lower than others, but is not excluded altogether, as it would be with the - operator.

- `*` **Asterisk**

The asterisk serves as the truncation (or wildcard) operator. Unlike the other operators, it is appended to the word to be affected. Words match if they begin with the word preceding the \* operator.

- `" "` **Double quote**

The double quote operator is used to search for phrases. The phrase must be enclosed in double quotes. The phrase can contain any character except double quotes. The phrase is searched for as a whole, not as individual words."

## Examples

- _apple banana_

Find rows that contain at least one of the two words.

- _+apple +juice_

Find rows that contain both words.

- _+apple macintosh_

Find rows that contain the word “apple”, but rank rows higher if they also contain “macintosh”.

- _+apple -macintosh_

Find rows that contain the word “apple” but not “macintosh”.

- _+apple ~macintosh_

Find rows that contain the word “apple”, but if the row also contains the word “macintosh”, rate it lower than if row does not. This is “softer” than a search for '+apple -macintosh', for which the presence of “macintosh” causes the row not to be returned at all.

- _+apple +(>turnover <strudel)_

Find rows that contain the words “apple” and “turnover”, or “apple” and “strudel” (in any order), but rank “apple turnover” higher than “apple strudel”.

- _apple\*_

Find rows that contain words such as “apple”, “apples”, “applesauce”, or “applet”.

- _"some words"_

Find rows that contain the exact phrase “some words” (for example, rows that contain “some words of wisdom” but not “some noise words”). Note that the " characters that enclose the phrase are operator characters that delimit the phrase. They are not the quotation marks that enclose the search string itself.
