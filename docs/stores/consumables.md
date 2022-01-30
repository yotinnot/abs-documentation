# Consumables

::: tip
Traceability is important with consumables. Read [Traceability](/stores/#traceability)
:::

## Table of contents

[[toc]]

## Understanding ID numbers

Each consumable item have 3 differenct IDs associated to it, namely:

### Item ID

As its name suggests, item ID is the identification number for the item as a part number. you can say item ID is equivalent to part number but for different uses.

#### Item ID vs SKU

Stock Keeping Unit, or SKU, is also identification number (I should say text), however, is human readable and can be changed to reflect the item. When a person see an SKU, he/she should be able to know what item it is and may not have to search the database for description.

For example, `SHOE-NIKE-BLUE-32` is blue Nike shoes size 32 (note the hierarchy). If you later found out it's not actually blue but rather indigo, you can update the SKU to `SHOE-NIKE-INDIGO-32` - indigo Nike shoes size 32.

Item ID, on the other hand, is static - permanent, and is used by the system to identify the item.

With the above example, if that Nike shoes have Item ID of 111, when you update the SKU, those shoes will still have Item ID of 111 but a different SKU.

#### Item ID vs part number

This is obvious, part number is assigned by the manufacturer or seller of the item. Item ID is assigned by the system. Therefore, an item may or may not have part number but will always have Item ID.

### Deposit ID

In order to be able to track which item comes in when - FIFO - and to track life limited consumables, a deposit ID is assigned to each item at receiving/depositing. Different item ID should be deposited to the system separately, thus getting different Deposit ID. But importantly, the same item ID with different expiration date **_MUST_** be deposited separately.

::: warning
Items with expiration dates must be deposited individually
:::

You can think of Deposit ID as a batch number, same thing.

### Withdraw ID

This is the opposite of Deposit ID and is used to identify transactions with persons withdrawing the item.

## Navigation

Consumable module is subdivided into 4 tabs:

### Tab: Stock

Stock tab is your dashboard. It lists all Item IDs, ordered by quantity currently in stock, with lowest showing first. In this tab, you can create new Item ID or SKU.

### Tab: In

When receiving new items (that of course, already have item IDs), In tab will assigned unique Deposit ID for them and list them chronologically. Quantity deposited are updated to Stock tab.

### Tab: Out

This is opposite In tab and lists all withdrawing and discarding transactions. Quantity withdrawn are updated to Stock tab.

### Tab: Shelf life

This tab lists all items that have expiration dates and are still in stock, identified by their Deposit IDs and ordered by their expiration dates.

Storeman is advised to regulary visit this page for any expired items to discard them.

::: danger
**Do not keep expired items in Stores**. This can result in wrongly issuing items to withdrawer which will risk airworthiness.
:::

## Create new items

To add new item:

1. Navigate to Stock tab
1. Click `+ Add part number` at the top menu
1. Add new item dialog will appear:

![consumables_add_item](/assets/consumables/consumables_add_item.png)

4. Fill out the form, all fields are editable except shelf life
1. If this item should have expiration date, select `Shelf life`
1. Review the form then click `+ add` to submit

After creating an item/part number, the inventory will show that this item has 0 stock. You will need to deposit items.

## Deposit items

Before depositing items, make sure that they passed receiving inspection process. The receiving inspection process is not described in this document; you must consult with QA or Receiving Inspector for further details.

If items with the same Item ID have different expiration dates, you should deposit them one by one.

1. Navigate to Stock or In tab
1. Click on `Deposit`
1. Select item to be deposited from the dropdown menu: the items are listed by SKU
1. Enter all required fields.
1. If item has shelf life, make sure to input its expiration date
1. Upload its certificate, if any
1. Review the form then click `Submit`

## Withdraw items

## Discard expired items

Items that have expired must not be kept in stores and must be disposed of properly.
