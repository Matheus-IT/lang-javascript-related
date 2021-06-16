/*
        *** JavaScript Date Output ***
    - Independent of input format, JavaScript will (by default) output dates in full text
    string format:
    Tue Mar 24 2015 21:00:00 GMT-0300 (Brasilia Standard Time)
*/

/*
        *** Time Zones ***
    - When setting a date, without specifying the time zone, JavaScript will use the browser's
    time zone.
    - When getting a date, without specifying the time zone, the result is converted to the
    browser's time zone.
    - In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will
    be converted to CDT (Central US Daylight Time) if a user browses from central US.
*/
