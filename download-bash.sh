#  fetch all albums on https://jsonplaceholder.typicode.com/albums
#  and save them to a file named albums.json
# use jq to pick out only the title and id of each album
curl https://jsonplaceholder.typicode.com/albums | jq '[.[] | {title, id}]' > data/albums-bash.json
