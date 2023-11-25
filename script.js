//your JS code here. If required.
let astring = ''
for(let i= 1;i<=20;i++)
	{
		if(i %3==0 && i%5==0)
		{
			astring+='FizzBuzz\n'
		}
		else if(i%3==0)
		{
			astring+='Fizz\n'
		}
		else if(i%5==0)
		{
			astring+='Buzz\n'
		}
		else
			astring+=`${i}\n`
			
	}
alert(astring )