$(function()
    {
        $('#inputDate1').datePicker();
        
        
        $('#inputDate2').datePicker({
            startDate: '01-01-2000',
            endDate: '01-01-2012',
            createButton:false,
            clickInput:true
        });

        $('#inputDate3').datePicker({
            createButton:false,
            clickInput:true
        });

        $('#inputDate4').datePicker({
            createButton:false,
            clickInput:true,
            endDate: (new Date()).addDays(365).asString() 
        });     

        $('#inputDate5').datePicker({
            clickInput:true,
            endDate: (new Date()).addDays(365).asString(),
            renderCallback:function($td, thisDate, month, year)
                {
                    if (thisDate.isWeekend()) {
                        $td.addClass('weekend');
                        $td.addClass('disabled');
                    }
                }
        }); 

        $('#inputDate6').datePicker({
            displayClose:true,
            closeOnSelect:false
        })
        .bind(
            'click',
            function()
            {
                alert("сработал click!");
            }
        );


        $('#inputDate7')
        .datePicker({
            createButton:false,
            startDate: (new Date()).addDays(-5).asString(),
            clickInput:true
            }
        )
        .bind(
            'dpClosed',
            function(e, selectedDate)
            {
                alert("сработал dpClosed");         
            }
        )
        .bind(
            'dateSelected',
            function(e, selectedDate, $td)
            {
                alert("сработал dateSelected, " + selectedDate.asString());
                $('#inputDate7').val(selectedDate.asString());
                $('#inputDate6').dpSetSelected(selectedDate.addDays(0).asString());
            }
        );  


        $('#inputDate8')
            .datePicker({inline:true})
            .bind('dateSelected',function(e, selectedDate, $td)
                    {
                        alert(selectedDate.asString());
                    }
            );

        
    });