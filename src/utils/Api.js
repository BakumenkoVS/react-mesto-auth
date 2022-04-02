class Api {
   constructor({ address, token }) {
      this._address = address;
      this._token = token;
   }

   _handleResponse = (response) => {
      if (response.ok) {
         return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`);
   };

   signUp(data) {
      return (`${this._address}signup`,
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   signIn(data) {
      return (`${this._address}signin`,
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   getUserInfo() {
      return fetch(`${this._address}users/me`, {
         headers: {
            authorization: this._token,
         },
      }).then(this._handleResponse);
   }

   getCard() {
      return fetch(`${this._address}cards`, {
         headers: {
            authorization: this._token,
         },
      }).then(this._handleResponse);
   }

   addCards(data) {
      return fetch(`${this._address}cards`, {
         method: 'POST',
         headers: {
            authorization: this._token,
            'Content-type': 'application/json',
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   addUserInfo(data) {
      return fetch(`${this._address}users/me`, {
         method: 'PATCH',
         headers: {
            authorization: this._token,
            'Content-type': 'application/json',
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   deleteCard(id) {
      return fetch(`${this._address}cards/${id}`, {
         method: 'DELETE',
         headers: {
            authorization: this._token,
         },
      }).then(this._handleResponse);
   }

   addCardLike(cardId) {
      return fetch(`${this._address}cards/${cardId}/likes`, {
         method: 'PUT',
         headers: {
            authorization: this._token,
         },
      }).then(this._handleResponse);
   }

   deleteCardLike(cardId) {
      return fetch(`${this._address}cards/${cardId}/likes`, {
         method: 'DELETE',
         headers: {
            authorization: this._token,
         },
      }).then(this._handleResponse);
   }

   addAvatar(data) {
      return fetch(`${this._address}users/me/avatar`, {
         method: 'PATCH',
         headers: {
            authorization: this._token,
            'Content-type': 'application/json',
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._address}cards/${cardId}/likes`, {
         method: isLiked ? 'PUT' : 'DELETE',
         headers: {
            authorization: this._token,
            'Content-type': 'application/json',
         },
      }).then(this._handleResponse);
   }
}

export const api = new Api({
   address: 'https://mesto.nomoreparties.co/v1/cohort-35/',
   token: '5c1fbf97-83e7-4354-8f50-5549f6898841',
});

export const authApi = new Api({
   address: 'https://auth.nomoreparties.co/',
});
