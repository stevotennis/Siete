COGS 121 Final Project - Spring 2015
===========
Deployed App:
http://siete2.herokuapp.com/

TO DO:
- Connect user input zipcode to app.js query
- Pass array between .js files in order to populate dashboard D3JS w/DELPHI data


VARS:
- total - Number of times a distinct charge_description occurs for a zipcode

	select  "charge_description", count(*)
	from "arjis_crimes"
	where "zip"='91950'
	group by "charge_description"
	order by count(*) desc

	
- low - 2013
- med - 2014
- high -


Regional Crime:
- 90 communities
- 156 zip codes
- 760 charge_descriptions



SQL Queries:

WORDCLOUD:
- Get charge_description and the number of times it occurred for a zipcode. 
- Orders from highest to lowest so we can display top 10 charge_description

	select  "charge_description", count(*)
	from "arjis_crimes"
	where "zip"='91950'
	group by "charge_description"
	order by count(*) desc
	
YEAR:
- Get the year from activity_date and the number of times it occurs

	select date_part('year', "activity_date"), count(*)
	from "arjis_crimes" 
	where "zip"='92058'
	group by date_part('year', "activity_date")
	order by count(*)
	

////////////////////////////////// 2013 ///////////////////////////////////////////
2013:
- Number of times 2013 occurs w/in activity_date for particular zipcode

	select date_part('year', "activity_date"), count(*)
	from "arjis_crimes" 
	where "zip"='92058' and date_part('year', "activity_date")='2013'
	group by date_part('year', "activity_date")
	
	
- Charge Description and number of times it occured in 2013

	select  "charge_description", count(*)
	from "arjis_crimes"
	where "zip"='92058' and date_part('year', "activity_date")='2013'
	group by "charge_description"
	order by count(*) desc
	

////////////////////////////////// 2014 ///////////////////////////////////////////
2014:
- Number of times 2014 occurs w/in activity_date for particular zipcode

	select date_part('year', "activity_date"), count(*)
	from "arjis_crimes" 
	where "zip"='92058' and date_part('year', "activity_date")='2014'
	group by date_part('year', "activity_date")


- Charge Description and number of times it occured in 2014

	select  "charge_description", count(*)
	from "arjis_crimes"
	where "zip"='92058' and date_part('year', "activity_date")='2014'
	group by "charge_description"
	order by count(*) desc








- Charge Description and the Year it occured

	select "charge_description", date_part('year', "activity_date")
	from "arjis_crimes" 
	where "zip"='92058'
	


