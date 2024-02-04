
function InsertTallyUpLive() {
    const url = 'https://mailer.political.nz/tallyup_live.json';
    // Fetch the JSON data
    fetch(url, { mode: 'cors'})
        .then(response => response.json())
        .then(data => {
          
            
        var tallyup_live_date_container = document.getElementById("tallyup_live_date_container");
        // Check if both tallyup_live_month and tallyup_live_year are not undefined
        if (typeof data.tallyup_live_month !== 'undefined' && typeof data.tallyup_live_year !== 'undefined') {
            const tallyup_live_date = document.createElement('p');
            // Uncomment and correct the next line if you need to add a class to the tallyup_live_date element
            // tallyup_live_date.classList.add("tallyup-digit");
            tallyup_live_date.textContent = data.tallyup_live_month + " " + data.tallyup_live_year;
            tallyup_live_date_container.appendChild(tallyup_live_date);
        }

            
            // Retrieve the value you want from the JSON data
            const TallyUpLiveValue = data.tallyup_live_active;
            // Convert the number to a string and pad it with zeros to ensure it's 6 characters long
            let padded_tallyup = TallyUpLiveValue.toString().padStart(6, '0');
            
            // Split the padded number into its individual digits
            let digits = padded_tallyup.split('');
            
            //var today = new Date();
            //var month = today.toLocaleString('default', { month: 'short' });
            
            var tallyup_digit_container = document.getElementById("tallyup_live_digit_container")

            
            for (let i = 0; i < digits.length; i++) {
                const tallyuplive_digit_span = document.createElement('span');
                tallyuplive_digit_span.classList.add("tallyup-digit");
                tallyuplive_digit_span.textContent = digits[i]
                tallyup_digit_container.appendChild(tallyuplive_digit_span);
            }



        })
        .catch(error => console.error(error));
}
 document.addEventListener('DOMContentLoaded', InsertTallyUpLive);

