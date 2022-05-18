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

   signUp(password, email) {
      return fetch(`${this._address}/signup`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ password, email }),
      }).then(this._handleResponse);
   }

   signIn(password, email) {
      return fetch(`${this._address}/signin`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ password, email }),
      }).then(this._handleResponse);
   }

   getContent = (token) => {
      return fetch(`${this._address}/users/me`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      }).then(this._handleResponse);
   };

   getUserInfo() {
      return fetch(`${this._address}/users/me`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   getCard() {
      return fetch(`${this._address}/cards`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   addCards(data) {
      return fetch(`${this._address}/cards`, {
         method: "POST",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-type": "application/json",
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   addUserInfo(data) {
      return fetch(`${this._address}/users/me`, {
         method: "PATCH",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-type": "application/json",
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   deleteCard(id) {
      return fetch(`${this._address}/cards/${id}`, {
         method: "DELETE",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   addCardLike(cardId) {
      return fetch(`${this._address}/cards/${cardId}/likes`, {
         method: "PUT",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   deleteCardLike(cardId) {
      return fetch(`${this._address}/cards/${cardId}/likes`, {
         method: "DELETE",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   addAvatar(data) {
      return fetch(`${this._address}/users/me/avatar`, {
         method: "PATCH",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-type": "application/json",
         },
         body: JSON.stringify(data),
      }).then(this._handleResponse);
   }

   changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._address}/cards/${cardId}/likes`, {
         method: isLiked ? "PUT" : "DELETE",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-type": "application/json",
         },
      }).then(this._handleResponse);
   }
}

export const api = new Api({
   address: "https://api.mesto.bakumenko.nomoredomains.xyz",
   token: localStorage.getItem("jwt"),
});

export const authApi = new Api({
   address: "https://api.mesto.bakumenko.nomoredomains.xyz",
});
