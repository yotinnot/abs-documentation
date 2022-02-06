# Tires

## Table of contents

[[toc]]

## Introduction

Initially included in Spares module, tires require a lot of storage space and move through inventory in bi-direction manner, e.g. removed from wheels and kept in another storage. The tires then given its own module to manage.

Tires module deals with receiving of new tires from both customers and vendors.

## Receive new tires

1. Click `+ TIRES` to open a dialog.
1. Enter customer code, e.g. VZ, and receiving date.
1. In the dropdown menu select tire part number, serial number and R level then click `+`. All fields must be completed.
1. Review the list then click `SUBMIT`
1. The dialog should disappear. The tire list will repopulate.

## Receive new tires by uploading `.csv` file

In case the vendors provide an `excel` or `.csv` file containing all the tires, you can upload the file and let the system add them for you, saving you time.

Clear instructions are displayed on the dialog, but here's the content:

::: info
Instructions:

- Prepare a .csv file containing the tires.
- If the first row is the header row: make sure the headers contain [ "PartNo", "SerialNo", "RD_Level" ], in any order.
  If the file was prepared by Bridgestone, it should already contain the required data without requiring you to modify it, except saving it as .csv .
  Added/received tires will allow user to pick the tire to add to a work order.
- If the .csv does not have header row: the .csv must contain only the following in this order. "partnumber", "serialnumber", "recap"
- Use only number for retread level, for example: "APR07010", "Z186H102", "0".
- You will have a chance to review the data before uploading it.
  :::

After uploading the file, you will be giving a chance to review the data before saving.

## Edit tires

1. Click on the `ID` or `pen` icon of the tire that needs modification.
