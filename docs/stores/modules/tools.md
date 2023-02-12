# Tools

## Introduction

![tools](/assets/tools/tools.png)

This module is one of the most advanced modules in the system because it was developed later than other modules.

The tool module deals with the usage, control and calibration of the tools. Each tool, depending on relevant manuals, requires different calibration interval but at any case not greater than once a year. NDT related tools may demand more frequent calibration interval. More in depth requirements can be found under `Store Training`.

All measuring tools and tools that have some kind of scale, measurement need to be controlled under this module.

## Navigation

The tool module is subdivided into 4 tabs: _Active_, _Archive_, _Calibrations_ and _Loan_.

![tools_tabs](/assets/tools/tools_tabs.png)

### Tab: Active tools

Active tools are the tools that are currently in circulation and under storeman / QA 's control. They may be `Serviceable` or `Inactive`, the latter is not to be confused with `Archived tools`. Archived tools are tools that have been removed out of tracking system, either because of damage, end-of-life or discarded. **Inactive Active tools** are, on the other hand, not discarded or damaged, but maybe were set to inactive because they are out of calibration or pending for calibration or on loan to outside organizations.

I think we need to change the name here.

### Tab: Archived tools

When a tool is no longer used, whether due to out of calibration, missing or damaged, it is prohibited to delete it from the system as it might have previously been used and made associated with work orders. Despite it being discarded physically, the tool data should be archived.

Archiving tools removing them from being able to further use in work orders but still keeping their records.

To re-enable tool, click unarchive button at the last column of that tool:

![image](/assets/tools/unarchive.png)

### Tab: Calibrations

This tab only display all calibration records on all tools, ordered by calibration date. Here you can view and upload calibration certificates.

### Tab: Loans

This tab contains the borrowing and returning of tools by and from users.

To withdraw a tool:

1. Enter the tool ID - Tool ID in Airborne is in `TLXXX` format where `XXX` is a running number. `TL` stands for tool.
1. Scan the employee badge of the user borrowing or returning the tool.
1. Click submit.

To return a tool: proceed the same steps as above. The system will put the status of the tool automatically, e.g. if the tool was previously borrowed, the system will return the tool, and vice versa. Therefore, user must record the movement everytime.

---

## Tool status labels/tags

Tool may have a status shown next to its ID to indicate whether it is still in calibration, approaching calibration, overdue or inactive.

| Label color  | Meaning     | Status        | Conditions                                                |
| ------------ | ----------- | ------------- | --------------------------------------------------------- |
| Green        | Serviceable | Serviceable   | Tool is within calibration and next calibration > 30 days |
| Orange       | Almost due  | Serviceable   | Tool is within calibration but next calibration < 30 days |
| Red          | Overdue     | Unserviceable | Tool is overdue for calibration < 30 days                 |
| White / Grey | Inactive    | Unserviceable | Tool is inactive or overdue for calibration > 30 days     |
| Blue         | Calibrating | Unserviceable | Tool is being calibrated                                  |

Examples:

![active_tools](/assets/tools/tools_tag.png)

### Serviceable

:::tip
Serviceable tool has green label.
:::

In order to set tool to `Serviceable`, its must still be within calibration and the next calibration date must be greater than 30 days from today. User can only set a tool to `Serviceable` if both conditions are met.

### Almost due

::: tip
Almost due is orange.
:::

Tools that are about to due for calibration in 30 days or less will have an orange label with number of remaining days. User cannot set this label manually, it will automatically be assigned to `Serviceable` label only. Almost due tools can still be used.

### Overdue

::: tip
Overdue is red.
:::

Overdue label is automatically assigned only. Tool that past its due date for calibration will receive a red label with number of days since the due date counting up to 30 days before changing to `Inactive`. User cannot set or unset this label.

### Inactive

::: tip
Inactive label is white.
:::

Inactive tools cannot be used to associate with any work orders (existing work orders are not affected). A tool can become inactive following 2 scenarios:

- User manually set to inactive
- System automatically set it to inactive. This only occurs when a tool has been overdue for calibration for more than 30 days.

### Calibrating

::: tip
Calibrating tool has blue label.
:::

Any tool, whether serviceable or inactive, can be set to calibrating to indicate that it has been moved out of use and is being sent out for calibration. Calibrating tools cannot be used.

## Setting tool labels/tags

Tool status label normally set itself automatically depending on its calibration data as explain before. Some label may be set manually, however, it is recommended that you let the system set the label. To do this, click on the label then select `Auto assign`.

`Auto assign` is the default status set to tool upon receiving and on calibration data update. When in doubt, set to this status.

## Adding calibration records

In order to maintain the tools to be within calibration data and usable by other modules, user needs to routinely update all tools calibration data when received back from calibration lab.

Once you received the tool back and hopefully a calibration certificate came back with it, you need to update its data and upload the certificate for record keeping. To do so:

1. In any tab, click on tool ID of the tool to update.
1. When new page loads, find Calibration Log card.

![add_calibration](/assets/tools/tools_add_calibration.png)

3. Click `+ Calibration`
1. Add Calibration Data dialog will appear

![add_calibration_dialog](/assets/tools/tools_calibration_dialog.png)

5. Fill in the form and upload a certificate (preferably)
1. Click `Submit` to submit the form
1. After complete, the calibration log for this tool will repopulate and tool status will update

::: info
You don't need to update the records in chronological order. The system will sort the records base on the calibration dates.
:::

## Calibration alerts

Don't worry if you don't have time to monitor this module 24/7, the system constantly watchs all tools for it's calibration status and will notify users regulary. The system is currently set to alert you at `8.00am, on the 20th of every month` for all calibration due in the following month even if that month has no due.

For example, if June 2022 has 10 tools that will due for calibration, you will receive an alert on the 20th of May 2022.

If you would like to change the alerts intervals, please submit a request. Note that any change to the alerts will affect all users and not just you.

Important to note, this alerts will only occur once for that calibration due date. If the tool that was supposed to be calibrated is still not being calibrated, you will not receive any alerts for that tool again unless you visit Active tools tab.

Using the above example with tool ID1234 needing calibration in June 2022, which you should have received the alert in May, if you didn't send it out for calibration in June - its status will still be due, overdue or inactive. Now, on the 20th of June 2022, you will not be alerted for TL1234 again and will only receive alert for tools due in July 2022. And if TL1234 will never be calibrated, you will also never receive alerts for it ever again - TL1234 status will be set to `Inactive` and cannot use - unless you send it out for calibration and update its data.

## Tolerance, or the lack thereof

Most of the times, tools returned from calibration should and hopefully be in tolerence, meaning that they still maintain their measuring accuracy/precision. (Both terms, `accuracy` and `precision`, though seem similar, have differently meaning scientifically). This should be described in details in their calibration certificates.

Sometimes, they are not. Calibration labs may still provide certificates but state the condition otherwise, typically as `Out of value`, `Out of tolerance` or other similar words. When receiving and entering the data in the system, you must make sure to note these status and set tool label accordingly. **_If out of tolerance, you must set tool status to `Inactive` and `archive` it._**

::: danger
Out of Calibration or out of tolerance tools must never be used. Using them will directly have effects on airworthiness of components and aircraft and may cause death.
:::

Although a tool may be within calibration noted on calibration sticker, this does not guarantee it's tolerance. User of tools must be vigilant on the tool's reading.

If the reading is noticeably off, please do as follows:

1. User:

   1. User writes and submits occurance report to QA and storeman and MM.
   1. Return the tool to storeman.

1. Storeman:
   1. Storeman receives the tool back in the system, sets label to `Inactive` and, optionally, writes a comment on that tool.
   1. Storeman gives the tool to QA to vertify and write his own occurance report.
1. QA:
   1. If QA decides that it can no longer be use, archive it, then procure a new one. Otherwise, send it out for calibration.
   1. Optionally, report to Accountable Manager.

## Archiving and unarchiving tools
