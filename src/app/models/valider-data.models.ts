export namespace ValiderData{

  //Validation telephone
  export function ValiderTelephone(telephone: string){

    if(telephone != null || telephone != ""){

      if( telephone.substring(0,2) =="33" || telephone.substring(0,4)=="0033" || telephone.substring(0,3) == "+33" ){
        var interNum=telephone.substring(telephone.indexOf('33') + 2);
        console.log('interNum :'+interNum);
        console.log('interNum length : '+interNum.length);
        if(interNum.length != 9){
          return "Ce n'est pas un numéro international que vous avez saisi." ;
        }
        // else
        //   return true;
      }
      else if(telephone.trim().length !=10 || telephone[0] != '0'){
        return 'Ce n\'est pas un numéro que vous avez saisi.';
      }

      // SANS PRISE EN COMPTE DE L'INDEX :
      var numerosInvalides = ConstruireTableNumero();
      let num = telephone.substring(2);
      if(numerosInvalides.includes(num)){
        return 'Votre numéro de téléphone est incorrect';
      }


      //console.log(telephone.substring(2));
    }
    return false;
  }

   //SANS INDEX DU TEL POUR EVITER REPETITION DE COMPOSITION INVALIDE :
  export function ConstruireTableNumero(){
  // NUMERO NON VALIDE SPECIFIQUES :
    let numerosInvalides  =[
      '12345678',
      '23456789',
      '87654321',
      '98765432',
      '01020304',
      '02030405',
      '03040506',
      '04050607',
      '05060708',
      '06070809',
      '07080910',
      '07080901',
      '08090102',
      '09010203',
      '04030201',
      '05040302',
      '06050403',
      '07060504',
      '08070605',
      '08070603',
      '12121212'
    ];

    let tabIntermediaire =['########','0#0#0#0#'];

    let temp =[]  ;
    for(let i=0; i<=9; i++){
      var re =/#/gi;
      temp = [];
      for(let i =0; i< tabIntermediaire.length; i++){
        temp[i]= tabIntermediaire[i];
      }

      //Replace "#"
      for(let t= 0; t< temp.length; t++){
        temp[t]= temp[t].replace(re, i.toString());
      }
      // temp[0]= temp[0].replace(re, i.toString());
      // temp[1]= temp[1].replace(re, i.toString());

      //Merge tables numerosInvalides and tabIntermediaire
      numerosInvalides = [...numerosInvalides, ...temp];

    }

    let tabIntermediaire2 =['*#######','#*######','##*#####','###*####','####*###','#####*##','######*#','#######*'];

    var temp2;
    for(let i=0; i<=9; i++){
      var re =/#/gi;
      temp2 = [];

      for(let k=0; k< tabIntermediaire2.length; k++){
        temp2[k] = tabIntermediaire2[k];
      }

      //Replace "#" and "*"
      for(let j=0; j <= 9; j++){
        for(let t=0; t< temp2.length; t++){
          temp2[t]=temp2[t].replace('*', j.toString()).replace(re, i.toString());
        }

        //Merge tables numerosInvalides and temp2
        numerosInvalides = [...numerosInvalides, ...temp2];
        //clear temp2
        temp2 = [];
        for(let k=0; k< tabIntermediaire2.length; k++){
          temp2[k] = tabIntermediaire2[k];
        }
      }

    }

  //ENLEVER NUMEROS se répetant :
    var numerosInvalidesUnique= uniqByReduce(numerosInvalides)

    // console.log(numerosInvalides)
    // console.log(numerosInvalidesUnique);

    return numerosInvalidesUnique;
  }

   //**********WAYS TO REMOVE DUPLICATES********************************
  //Comparing values one by one
  function uniqByObject<T>(array: T[]) {
    const result: T[] = [];
    for (const item of array) {
         if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
  }

  function uniqByForEach<T>(array: T[]) {
    const result: T[] = [];
    array.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    })
    return result;
  }
  //Using Array.prototype.reduce
  function uniqByReduce<T>(array: T[]): T[] {
    return array.reduce((acc: T[], cur: T) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, [])
  }
  //Using Array.prototype.filer
  function uniqByFilter<T>(array: T[]) {
    return array.filter((value, index) => array.indexOf(value) === index);
  }

  //Using Map
  function uniqByMap<T>(array: T[]): T[] {
    const map = new Map();
    for (const item of array) {
        map.set(item, item);
    }
    return Array.from(map.values());
  }

  //Using Set object
  function uniqBySetWithArrayFrom<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }
  function uniqBySetWithSpread<T>(array: T[]): T[] {
    return [...new Set(array)];
  }

}


