import { DatePicker } from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.datePickerStyles, park: park.datePickerStyles, shadcn: shadcn.datePickerStyles },
    theme
  );

  return (
    <DatePicker.Root className={clsx(styledSlots.root)}>
      <DatePicker.Label className={clsx(styledSlots.label)}>Label</DatePicker.Label>
      <DatePicker.Control className={clsx(styledSlots.control)}>
        <DatePicker.Input className={clsx(styledSlots.input)} />
        <DatePicker.Trigger className={clsx(styledSlots.trigger)}>📅</DatePicker.Trigger>
        <DatePicker.ClearTrigger className={clsx(styledSlots.clearTrigger)}>Clear</DatePicker.ClearTrigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner className={clsx(styledSlots.positioner)}>
          <DatePicker.Content className={clsx(styledSlots.content)}>
            <DatePicker.YearSelect className={clsx(styledSlots.yearSelect)} />
            <DatePicker.MonthSelect className={clsx(styledSlots.monthSelect)} />
            <DatePicker.View view="day" className={clsx(styledSlots.view)}>
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl className={clsx(styledSlots.viewControl)}>
                      <DatePicker.PrevTrigger className={clsx(styledSlots.prevTrigger)}>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger className={clsx(styledSlots.viewTrigger)}>
                        <DatePicker.RangeText className={clsx(styledSlots.rangeText)} />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger className={clsx(styledSlots.nextTrigger)}>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table className={clsx(styledSlots.table)}>
                      <DatePicker.TableHead className={clsx(styledSlots.tableHead)}>
                        <DatePicker.TableRow className={clsx(styledSlots.tableRow)}>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id} className={clsx(styledSlots.tableHeader)}>
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody className={clsx(styledSlots.tableBody)}>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id} className={clsx(styledSlots.tableRow)}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day} className={clsx(styledSlots.tableCell)}>
                                <DatePicker.TableCellTrigger className={clsx(styledSlots.tableCellTrigger)}>
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="month" className={clsx(styledSlots.view)}>
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl className={clsx(styledSlots.viewControl)}>
                      <DatePicker.PrevTrigger className={clsx(styledSlots.prevTrigger)}>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger className={clsx(styledSlots.viewTrigger)}>
                        <DatePicker.RangeText className={clsx(styledSlots.rangeText)} />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger className={clsx(styledSlots.nextTrigger)}>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table className={clsx(styledSlots.table)}>
                      <DatePicker.TableBody className={clsx(styledSlots.tableBody)}>
                        {datePicker.getMonthsGrid({ columns: 4, format: "short" }).map((months, id) => (
                          <DatePicker.TableRow key={id} className={clsx(styledSlots.tableRow)}>
                            {months.map((month, id) => (
                              <DatePicker.TableCell
                                key={id}
                                value={month.value}
                                className={clsx(styledSlots.tableCell)}
                              >
                                <DatePicker.TableCellTrigger className={clsx(styledSlots.tableCellTrigger)}>
                                  {month.label}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="year" className={clsx(styledSlots.view)}>
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl className={clsx(styledSlots.viewControl)}>
                      <DatePicker.PrevTrigger className={clsx(styledSlots.prevTrigger)}>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger className={clsx(styledSlots.viewTrigger)}>
                        <DatePicker.RangeText className={clsx(styledSlots.rangeText)} />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger className={clsx(styledSlots.nextTrigger)}>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table className={clsx(styledSlots.table)}>
                      <DatePicker.TableBody className={clsx(styledSlots.tableBody)}>
                        {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                          <DatePicker.TableRow key={id} className={clsx(styledSlots.tableRow)}>
                            {years.map((year, id) => (
                              <DatePicker.TableCell key={id} value={year.value} className={clsx(styledSlots.tableCell)}>
                                <DatePicker.TableCellTrigger className={clsx(styledSlots.tableCellTrigger)}>
                                  {year.label}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
};
