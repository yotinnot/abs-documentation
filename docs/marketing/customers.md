# Customers

In most ERP software, customers and vendors are considered the same - they are all contacts. ABS-Intranet, however, customers are mostly airlines, e.g. Thai AirAsia, NokAir, Bangkok Airways, etc. They all have unique identifying ICAO and IATA codes. For example, Thai AirAsia is assigned code `FD` by the ICAO and is globally unique, Bangkok Airways is assigned `PG`. We use the same codes which is always 2-character long.

Problem arises when customer is a private operator which does not need IATA code. We solve the problem by allowing more than 2 characters for the customer code to easily distiguish them from airlines. 3-character codes include for example, `MIN` for MJets (Minor Group), `BRI` for Bridgestone, etc.

To create a new customer, please make sure that the code you are assigning follows these rules:

::: info

- **IS NOT** already taken in the system
- If customer **IS** an airline:
  - The code does not belong to another existing airline
  - The code must be 2-character long
- If customer **IS NOT** an airline
  - The code is longer than 2 characters.

:::

When enter a new code, the system will help check the code against IATA database.

::: warning
This module is for customers only and not for vendors or suppliers.
:::

::: info
ABS-Intranet is synced with PEAK accounting software, however, adding customer via Intranet does not take effect in PEAK, you will have to manually add to Peak.
:::

Adding new customer should be easy enough - I will not explain on how to do it.

## Creating customers

## Updating customers
