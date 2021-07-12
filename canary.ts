
global.fetch = require("node-fetch");

class  TMobileClientCheck {


      async DiscoveryCall() {

          const fs = require('fs').promises;
          let clientid = await fs.readFile('./clientid', 'utf-8');
          console.log(clientid)

          let PhoneNumber = await fs.readFile('./T-Mobile-Phone-Number', 'utf-8');

        console.log(PhoneNumber)
        console.log(clientid)

          // For now, consider the data is stored on a static `users.json` file
          const response = await fetch('https://discoveryissuer.xcijv.com/.well-known/openid-configuration?phone_number='+PhoneNumber+'+&client_id='+clientid+'&sdk_version=1.1').then(res => res.json())



              https://sp.xcijv.com/sp/v1/sp/'+ clientname).then(res => res.json())
        return response
    }

}


class  ClientIDCheck {


    async getclientconfig() {
        const fs = require('fs').promises;
        let clientname = await fs.readFile('./clientid', 'utf-8');
        console.log(clientname)
        // For now, consider the data is stored on a static `users.json` file
        const response = await fetch('https://sp.xcijv.com/sp/v1/sp/'+ clientname).then(res => res.json())
        return response
    }

}






class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

//Creat a unique file name Example of a bunch of GUIDs

    let canaryfilename= Guid.newGuid();
    console.log("Canary File Name   --> "+canaryfilename);


 // Lets go check the block chain response time

   let t0 = performance.now()

        ClientConfig = new ClientIDCheck();
        let clientresponse =ClientConfig.getclientconfig()
      //  console.log(clientresponse)


 let t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

TmobileCanary= new TMobileClientCheck();
        let = TmobileCanary.DiscoveryCall()

console.log(TMobileCanaryChecksResponse)




