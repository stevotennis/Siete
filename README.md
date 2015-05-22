COGS 121 Final Project - Spring 2015
===========

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
