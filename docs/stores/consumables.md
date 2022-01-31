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

## Edit items

You can edit or update item data at anytime without affecting the transaction. However, you cannot edit shelf life data of an item, i.e. switching between having shelf life and not having shelf life.

To edit item:

1. Click on `Item ID`. `Item ID` should be all number with 16 digits, e.g. `4799704042831872`
1. Edit the fields as required
1. Upload picture if item if any
1. Click `Save` to submit

Note if you edit SKU or part number, although this is propagate to all transactions with this Item ID, however, printed label will not be affected (duh). If feasable, you should reprint the labels.

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

### Edit deposited items

You can edit deposited items only if you need to edit OEM batch number, quantity, price or upload certificates. If you want to edit the item itself (Item ID), you must set the quantity to `0`.

To edit deposited items:

1. Click on the vertical dots at the end of the row of the item needing modification
1. Update the fields
1. If you need to upload certificate, please note that if there are previously uploaded files, reuploading a new file will not overwrite the old files but it will added to list of uploaded files.
1. Click save to finish

::: info
Next version, reuploading file will overwrite the old files
:::

## Withdraw items

To withdraw items, follow below steps:

1. Navigate to Stock or Out tab
1. Click `Withdraw`
1. Enter the `Deposit ID of the item being withdrawn`. This is normally done by scanning barcode/QRcode on the label of the item
1. Enter the quantity being withdrawn
1. Click on `Withdrawer` field then use barcode scanner to scan withdrawer's employee badge
1. If employee badge is not available, you can select the withdrawer from the dropdown menu.
1. Click `Withdraw` button to submit

If the item being withdrawn has shelf life but there is the same Item ID with earlier expiration date, the system will recommend that you withdraw that item first. Although this is just a recommendation, you should adhere. This is to fully utilize items and avoid having expired items in storage.

Once withdraw process is complete, the system will update the stock, and if expiration, update the Shelf Life tab accordingly.

### Edit withdrawpn items

In case you have withdrawn something my mistake, whether wrong item or wrong quantity, unlike deposit process, you cannot edit the transaction per se, however. You must delete the wrong transaction first then redo the withdraw process with the correct item/quatity.

## Discard expired items

Items that have expired must not be kept in stores and must be disposed of properly.

To discard items, follow steps in Withdraw and select `Discard`.

## Stock reports

You can generate report from each of the tabs, for example, if you generate report from Stock tab, you will get stock report, if you generate from Shelf Life tab, you will get the current shelf life report. This is particulary useful if you need a shelf life report to put on the consumable cabinet. Bare in mind that all printed documents are considered "uncontrolled" which means is true at the time of printing only.

To print reports, click on download icon and follow on screen instructions, if any.

There are 2 file formats for report, Google sheet and `.csv`. If you use airborne-support email address to sign in into Google Chrome, you can view the report in Google sheet format, otherwise you will not be able to view. This is because the file is protected under organization. Generating `.csv` files are not affected by this restriction.

## Labels

### Consumable labels

As mentioned before, consumable is identified by its Item ID - for general identification, and Deposit ID - for any transaction. In order to print its ID label, it should be printed by Deposit ID.

To print consumable label:

1. Navigate to In tab
1. Click on the three vertical dots of the item that needs label
1. On the dropdown menu, click `Print label`
1. In the dialog, enter the quantity of the item and select the type of barcode, the default type is datamatrix
1. Click `Print`
1. A new window with the label will open for you to print

![consumable_label](/assets/consumable_label.png)

Consumable label has the following data:

- **BAT** - Deposit ID of the item
- **OEM** - Manufaturer's batch number
- **SKU** - SKU of the item
- **EXP** - Expiration date of the item, otherwise, N/A

### Shelf life labels

If the consumable has an expiration date, you can print the shelf life label in red to let users be aware of its condition.

1. Navigate to Shelf Life tab
1. Click `Shelf left label` button
1. Fill out the dialog that appears:

   1. If definitive expiration date is know, type in `Expiration or MFG date` with the expiration date. The format **MUST** be YYYY-MM-DD, e.g. 2022-12-31

   1. If definitive expiration date is unknown e.g. the item only tells the manufactured date and the duration you can keep it or the quarter of the year it was made:

      1. If definitive manufacture year, month and date is know, type in the manufacture date in `Expiration or MFG date`. The format **MUST** be YYYY-MM-DD, e.g. 2020-12-31

      1. If only manufacture year and month is known, type in the manufacture year in `Expiration or MFG date` with the format YYYY-MM, e.g. 2020-06

      1. If only manufacture year and the quarter is known, type in the manufacture year in `Expiration or MFG date` with the format YYYY, e.g. 2020. Type in quarter in `Quarter`

      1. If the manufacture quarter is known only, type in `Expiration or MFG date` only the year in the format YYYY, e.g. 2020

      1. Enter the duration and duration time in the next fields, e.g. to add 1 year to the above date, enter 1 and Years

   1. Beware when entering date, if the `add` row is not empty, the date entered in the `Expiration or MFG date` will not be printed, but the calculated date will be printed.

1. View the calculated expiration in the preview in red

1. Click `Print` to generate

![shelf_life_label](/assets/shelf_life_label.png)

Shelf Life label is self-explanatory.

Note that if item has shelf life, it will also be present in Consumable labe. This is for safeguard.

You can reprint Shelf Life label at any time.

::: warning
Some manufacturers use "**X**" in their expiration date. This can mean either "**UNLIMITED**" or number "**10**". You should consult with certificate of conformant, Form 1 or TDS for clarification.
:::

::: tip
As a rule of thumb, remember that all items may have expiration date. It is always better to print "UNLIMITED" Shelf Life label than not having any sticker.
:::
