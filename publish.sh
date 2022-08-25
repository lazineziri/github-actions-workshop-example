echo -e "\nStart publishing process...\n"

valid=true
count=1
while [ $valid ]
do
echo $count
sleep 1
if [ $count -eq 10 ];
then
break
fi
((count++))
done

echo -e "\n... publishing process finished\n"