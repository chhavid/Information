#! /bin/bash

function assert() {
  local message=$1
  local actual=$2
  local expected=$3

  local result='✅'
  if [[ "${expected}" != "${actual}" ]]
  then
    result='❌'
  fi 
  echo "$result $message"
}

function filled_form() {
form_details1= node fillForm.js << EOF > /dev/null
thanos
1797-10-18
snapping,fights
9876543210
somewhere
multi-universe
EOF


expected1='{"name":"thanos","dob":"1797-10-18","hobbies":["snapping","fights"],"phoneNum":"9876543210","address":"somewhere\nmulti-universe"}'

actual1=`cat form.json`

assert "Should write details in file" ${actual1} ${expected1} 
}

function closing_stream() {
form_details2= node fillForm.js << EOF > /dev/null
thanos
1797-10-18
EOF

actual2=`cat form.json 2>/dev/null`
expected2=""
message="Should not write anything if stream is closed before filling form completely"
assert "${message}" ${actual2} "${expected2}"
}

function invalid_input() {
form_details3= node fillForm.js << EOF > /dev/null
john
thanos
1797-10-18
snapping,fights
9876543210
somewhere
multi-universe
EOF

expected3='{"name":"thanos","dob":"1797-10-18","hobbies":["snapping","fights"],"phoneNum":"9876543210","address":"somewhere\nmulti-universe"}'

actual3=`cat form.json`

message="Should give the prompt again if input is invalid"
assert "${message}" ${actual3} ${expected3}
}

function main() {
filled_form
rm form.json
closing_stream
invalid_input
}

main