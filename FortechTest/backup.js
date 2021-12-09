$( document ).ready(function() {
    var endpoint = 'https://restcountries.com/v3.1';
    function searchCountry(){
        var input, filter, a, i, txtValue;
        input = $("#countrySearch").val();
        filter = input.toUpperCase();
        countriesContainer = document.getElementById(".display-countries");
        countries = document.getElementsByClassName("country-container");
        for (i = 0; i < countries.length; i++) {
            a = countries[i].getElementsByClassName("country-name")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                countries[i].style.display = "";
            } else {
                countries[i].style.display = "none";
            }
        }
    }
    function sortAllCountriesData(){
        $('.country-container').sort(function(a,b){
            if (a.textContent < b.textContent) {
                return -1;
              } else {
                return 1;
            }
        }).appendTo('.display-countries')
    }
    function filterCountry(region, population, language, timezone, currency){
        countries = document.getElementsByClassName("country-container");
        for (i=0;i<countries.length;i++) {
            let countryRegion = countries[i].getElementsByClassName("country-region")[0];
            let countryPopulation = countries[i].getElementsByClassName("country-population")[0];
            let countryLanguage = countries[i].getElementsByClassName("country-language")[0];
            let countryTimezone = countries[i].getElementsByClassName("country-timezone")[0];
            let countryCurreny = countries[i].getElementsByClassName("country-currency")[0];
            if(countryRegion.textContent != region && region != null ) countries[i].style.display = 'none';
            if(countryLanguage.textContent != language && language != null ) countries[i].style.display = 'none';
            if(countryTimezone.textContent != timezone && timezone != null ) countries[i].style.display = 'none';
            if(countryCurreny.textContent != currency && currency != null ) countries[i].style.display = 'none';
            if(population != null)
                switch(population) {
                    case '500000':
                        if(countryPopulation.textContent > population) countries[i].style.display = 'none';
                        break;
                    case '2000000':
                        if(countryPopulation.textContent > population && countryPopulation.textContent < 500000) countries[i].style.display = 'none';
                        break;
                    case '10000000':
                        if(countryPopulation.textContent > population && countryPopulation.textContent < 2000000) countries[i].style.display = 'none';
                        break;
                    case '100000000':
                        if(countryPopulation.textContent > population && countryPopulation.textContent < 10000000) countries[i].style.display = 'none';
                        break;
                    case '500000000':
                        if(countryPopulation.textContent > population && countryPopulation.textContent < 100000000) countries[i].style.display = 'none';
                        break;
                    case '1000000000':
                        if(countryPopulation.textContent > population && countryPopulation.textContent < 500000000) countries[i].style.display = 'none';
                        break;
                    case '3000000000':
                        if(countryPopulation.textContent > population && countryPopulation.textContent < 1000000000) countries[i].style.display = 'none';
                        break;
                }
            
        }
    }
    function getAllCountriesData(){
        $.ajax({
            url: endpoint + "/all",
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                let alreadyAdded = new Array();
                console.log(result);
                let languages = new Array();
                let languageHolder = new Array();
                let timezones = new Array();
                let timezonesHolder = new Array();
                let currencies = new Array();
                let currenciesHolder = new Array();
                $.each(result,function() {
                    if($(this)[0].languages) 
                    {
                        languageHolder = Object.values($(this)[0].languages);
                        for(i=0;i<languageHolder.length;i++)
                            languages.push(languageHolder[i]);
                    }
                    if($(this)[0].timezones){
                        timezonesHolder = Object.values($(this)[0].timezones);
                        for(i=0;i<timezonesHolder.length;i++)
                            timezones.push(timezonesHolder[i]);
                    }
                    if($(this)[0].currencies){
                        currenciesHolder = Object.values($(this)[0].currencies);
                        for(i=0;i<currenciesHolder.length;i++)
                            currencies.push(currenciesHolder[i].name);
                    }
                    $('.display-countries').append('<div class="country-container"><img src="' + $(this)[0].flags.png + '" alt=""><div class="country-details-container">'+'<div class="country-name"> Name: ' + $(this)[0].name.common+'</div><div class="country-capital"> Capital: ' + $(this)[0].capital + '</div><div class="country-region"> Region: ' + $(this)[0].region + '</div><div class="country-population"> Population: ' + $(this)[0].population + '</div></div><div class="additional-informations"><div class="alpha-2-code">Alpha 2 Code: '+$(this)[0].cca2+'</div><div class="coordinates"><span class="latitude">Latitude: '+$(this)[0].latlng[0]+'</span><span class="longitutde">Longitude: '+$(this)[0].latlng[1]+'</div><div class="area"> Area: '+$(this)[0].area+'</div><div class="timezone">Timezone: '+$(this)[0].timezones+'</div><div class="currencies">Currency: '+$(this)[0].currencies+'</div><div class="languages">Languages: '+Object.values($(this)[0].languages)+'</div></div></div>');
                    if(jQuery.inArray($(this)[0].region, alreadyAdded) == -1) {
                        $('.filter #continent').append("<option value='" + $(this)[0].region + "' class='continent-option'>" + $(this)[0].region + "</option>");
                        alreadyAdded.push($(this)[0].region);
                    }
                    if(jQuery.inArray($(this)[0].region, alreadyAdded) == -1) {
                        $('.filter #continent').append("<option value='" + $(this)[0].region + "' class='continent-option'>" + $(this)[0].region + "</option>");
                        alreadyAdded.push($(this)[0].region);
                    }
                    if(jQuery.inArray($(this)[0].region, alreadyAdded) == -1) {
                        $('.filter #continent').append("<option value='" + $(this)[0].region + "' class='continent-option'>" + $(this)[0].region + "</option>");
                        alreadyAdded.push($(this)[0].region);
                    }
                });
                let uniqLanguages = [...new Set(languages)];
                let uniqTimezones = [...new Set(timezones)];
                let uniqCurrencies = [...new Set(currencies)];
                for(i=0;i<=uniqLanguages.length;i++){
                    $('.filter #languages').append("<option value='"+uniqLanguages[i]+"' class='language-option'>" + uniqLanguages[i] + "</option>");
                }
                for(i=0;i<uniqTimezones.length;i++){
                    $('.filter #time-zones').append("<option value='"+uniqTimezones[i]+"' class='timezones-option'>" + uniqTimezones[i] + "</option>");
                }
                for(i=0;i<uniqCurrencies.length;i++){
                    $('.filter #currencies').append("<option value='"+uniqCurrencies[i]+"' class='currencies-option'>" + uniqCurrencies[i] + "</option>");
                }
                sortAllCountriesData();
            }
        })
    }
    
    getAllCountriesData();
    $('#countrySearch').on('keyup',function(){
        searchCountry();
    })
    $('.filter select').on('change',function(){
        let region = $('#continent').val();
        let population = $('#population').val();
        let language = $('#languages').val();
        let timezone = $('#time-zones').val();
        let currency = $('#currencies').val();
        filterCountry(region, population, language, timezone, currency);
    });
    
});