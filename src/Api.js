const BASE_API = 'https://databases-auth.000webhost.com/';

export default {
    checkToken: async () => {
        
    },

    SignIn: async (email, password) => {
        const req = await fetch(`${BASE_API}https://databases-auth.000webhost.com/sql.php?server=1&db=id19091240_app_db&table=cadastros&pos=0`, {
            method: 'POST',
            header:{
                Accept: 'application/jason',
                'acontent-Type': 'application/jason' 
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    },

    SignUp: async (name, matricula, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            header:{
                Accept: 'application/jason',
                'acontent-Type': 'application/jason' 
            },
            body: JSON.stringify({name, matricula, email, password})
        });
        const json = await req.json();
        return json;
    }
}