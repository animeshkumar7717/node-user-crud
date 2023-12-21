# get
    url : http://localhost:8090/user
    curl --location --request GET 'http://localhost:8090/user' \
# post
    url: http://localhost:8090/user
    curl --location --request POST 'http://localhost:8090/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
      "name": "Anime",
      "age": "18"
    }
'
# put
    url: http://localhost:8090/user/e6df1a6a-2265-4ab9-9a55-748e4e903728
    curl --location --request PUT 'http://localhost:8090/user/e6df1a6a-2265-4ab9-9a55-748e4e903728' \
    --header 'Content-Type: application/json' \
    --data-raw '{
      "name": "Animehh",
      "age": "18"
    }
'
# getByName
    url: http://localhost:8090/user/?name=Animesh
    curl --location --request GET 'http://localhost:8090/user/?name=Animesh' \

# sort (dynamic)

  # sortByName
    url: http://localhost:8090/user/?name=Animesh&sortBy=name
    curl --location --request GET 'http://localhost:8090/user/?name=Animesh&sortBy=name' \

  # sortByName in descreasing order
    url: http://localhost:8090/user/?name=Animesh&sortBy=name&order=desc
    curl: curl --location --request GET 'http://localhost:8090/user/?name=Animesh&sortBy=name&order=desc' \

  # sortByAge
    url: http://localhost:8090/user/?name=Animesh&sortBy=age
    curl --location --request GET 'http://localhost:8090/user/?name=Animesh&sortBy=age' \

  # sortByAge in descreasing order
    url: http://localhost:8090/user/?name=Animesh&sortBy=age&order=desc
    curl --location --request GET 'http://localhost:8090/user/?name=Animesh&sortBy=age&order=desc' \

# pagination
    url: http://localhost:8090/user/?name=Animesh&page=2&limit=3
    curl --location --request GET 'http://localhost:8090/user/?name=Animesh&page=2&limit=3' \

# delete
    url: http://localhost:8090/user/e6df1a6a-2265-4ab9-9a55-748e4e903728
    curl --location --request DELETE 'http://localhost:8090/user/e6df1a6a-2265-4ab9-9a55-748e4e903728' \
