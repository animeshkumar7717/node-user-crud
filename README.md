# get
    url: http://localhost:8090/book
    curl: curl --location --request GET 'http://localhost:8090/book/'
# post
    url: http://localhost:8090/book
    curl: curl --location --request POST 'http://localhost:8090/book' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "how to talk to someone",
  "author": "Eleina beazz",
  "summary": "This is psychology based novel for communication and physical behaviour and social behaviour"
}
'
# put
    url: http://localhost:8090/book/1d368369-cab0-4908-a74f-21767b609d22
    curl: curl --location --request PUT 'http://localhost:8090/book/1d368369-cab0-4908-a74f-21767b609d22' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "how to talk to someone",
  "author": "Eleina Craze",
  "summary": "This is psychology based novel for communication and physical behaviour and social behaviour"
}'
# getById
    url: http://localhost:8090/book/1d368369-cab0-4908-a74f-21767b609d22
    curl: curl --location --request GET 'http://localhost:8090/book/1d368369-cab0-4908-a74f-21767b609d22'
# delete
    url: http://localhost:8090/book/1d368369-cab0-4908-a74f-21767b609d22 
    curl: curl --location --request DELETE 'http://localhost:8090/book/1d368369-cab0-4908-a74f-21767b609d22' \
--header 'Content-Type: application/json' \
--data-raw '{
  "First_name": "Animesh",
  "Last_name":"Sharma",
  "password": "1234"
}
'