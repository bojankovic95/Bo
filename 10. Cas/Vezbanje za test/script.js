let n = 13.6;

if(n % 1 == 0){
    console.log("ceo");
}else{
    console.log("nije ceo");
}

let datum = new Date();
let dan = datum.getDay();


switch(dan){
    case 1: 
    console.log("jos 5 dana");
    break;
    case 2:
        console.log("jos 4 dana");
        break;
        case 3:
            console.log("jos 3 dana");
            break;
            case 4:
                console.log("jos 2 dana");
                break;
                case 5:
                    console.log("jos 1 dan");
                    break;
                    default:
                        console.log("vikend je"); 
}