const API_URL = 'http://localhost:8080';

const fetchAccount = async () => {
    try {
        const res = await fetch(`${API_URL}/accounts`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const postAccount = async (account) =>{
    try {
        const res = await fetch(`${API_URL}/accounts`,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(account),
        })
        if(!res.ok){
            throw new Error('Error to create account')
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const putAccount = async (account) =>{
    try {
        const res = await fetch (`${API_URL}/accounts/${account.id}`,{
            method : 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(account),
        });
        if (!res.ok) {
            throw new Error('Error to update account')
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { fetchAccount,postAccount,putAccount };
