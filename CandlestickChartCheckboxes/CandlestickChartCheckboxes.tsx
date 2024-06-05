@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');


$greystern: rgb(100, 88, 88);

#cont {
    height: 20px;
    margin-left: 2.5em;
    // margin-top: 0.5em;
    // margin: 0.5em 0.5em 0 0.5em;
    width: 250px;
    // border: 2px solid $greystern;

    display: flex;
    // align-self: flex-start;
    position: relative;
    left: -20%;
    flex-direction: row;
    // possibly space-around
    justify-content: space-between;
    align-items: center;

}

#subCont1 {
    // yes redundant data for readability and speed until refactor if enough time. 
    display: flex;
    // align-self: flex-start;
    flex-direction: row;
    // possibly space-around
    justify-content: center;
    align-items: center;
}

#subCont2 {
    display: flex;
    margin-left: 50px;
    // align-self: flex-end;
}

.innerSubCont {
    width: 45px;
    // border: 1px solid rgb(84, 207, 224);
    border: red;;
    // display: grid;
    // grid-template-columns: 40% 40%;
    display: flex;
    flex-direction: row nowrap; 
    padding: 0;

}

.checkboxText {
    font-size: 9px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: gray;
    // font-family: "Lato", sant-serif; 
    font-weight: lighter;
    // font-style: italic;
    // margin: 0 50px;
}

/* Hide the default checkbox */
.chbx[type="checkbox"] {
    display: none;
}

/* Style the .label to resemble a checkbox */
.label {
    display: inline-block;
    position: relative;
    padding-left: 25px; /* Adjust as needed */
    cursor: pointer;
    margin: 0 2.5px; 
}

/* Style the pseudo-element to create the checkbox */
.label:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    // margin: 0 50px;    
    width: 20px; /* Adjust as needed */
    height: 20px; /* Adjust as needed */
    border: 2px solid $greystern; /* Checkbox border */
    background-color: transparent; /* Checkbox background color */
}

/* Style the pseudo-element when checkbox is checked */
.chbx[type="checkbox"]:checked + .label:before {

    // background-color: #007bff; /* Change to desired checked color */
}

/* Style the pseudo-element to resemble the checkmark */
.label:after {
    font-size: 16px; /* Adjust as needed */
    // background-color: blue;
    color: $greystern; /* Color of the checkmark */
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0; /* Hide the checkmark by default */

    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 10px;
    height: 10px;
    border-left: 2px solid $greystern;
    border-bottom: 2px solid $greystern;
    transform: rotate(280deg);



    // content: '\2713'; /* Unicode checkmark character */
}

/* Style the pseudo-element to show the checkmark when checkbox is checked */
.chbx[type="checkbox"]:checked + .label:after {
    opacity: 1;
}

.singleMultiChartViewBtn {
    position: relative;
    // top: 12.5px;
    top: 15px;
    background-color: transparent;
    border: 2px solid $greystern;
    color: $greystern;

}
// plainlabel:
