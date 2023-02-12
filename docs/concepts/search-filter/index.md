# Searching and Filtering

## Introduction

ABS-Intranet provides search bar on most pages to allow users to search for specific data. This page explains how to use the search bar.

## Types of Search Bar

There are three types of search bar:

### 1. Filter Search Bar

This search bar normally accompanies a table. It allows users to filter the table by searching for specific data which was already populated in the table. This type of search bar is usually faster than _Server Search Bar_ and _Full-Text Search Bar_ but comes with a cost of pre-populating the table with data. Not ideal for large tables.

The filter function is called when the user types in the search bar. The table will be filtered based on the search bar input. The search bar input is case insensitive.

Only one word is allowed in the search bar. If the user types in multiple words, they will be treated as phrase. For example, if the user types in `hello world`, the search bar will search for `hello world` instead of `hello` and `world`.

### 2. Server Search Bar

This search bar is used to search for data on the server. This type of search bar is the slowest of all type of Search Bar but is ideal for large tables.

The search function is called when the user presses the `Enter` key. The client will send a request to the server to search for data. The server will then return the data to the client. The search bar input is case insensitive.

Same as _Filter Search Bar_, only one word is allowed in the search bar. If the user types in multiple words, they will be treated as phrase. For example, if the user types in `hello world`, the search bar will search for `hello world` instead of `hello` and `world`.

### 3. Full-Text Search Bar

This is special type of search bar with advanced functionality. It is also used to search for data on the server and is ideal for large tables.

The search function is called when the user presses the `Enter` key. The client will send a request to the server to search for data. The server will then return the data to the client. The search bar input is case insensitive.

Full-Text Search Bar will have a yellow search icon on the left side of the search bar.

The search bar input can be multiple words and accept operators. For example, if the user types in `hello world`, the search bar will search for `hello` and `world`. See [Advanced Search Options](/concepts/advanced-search-options/) for more information.
