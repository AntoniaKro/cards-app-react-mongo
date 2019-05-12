export function getCards() {
  return fetch('/cards').then(res => res.json());
}

export function postCard(card) {
  const { title, description, tags } = card;
  return fetch('/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      description,
      tags
    })
  }).then(res => res.json());
}

export function updateCard(card) {
  const { title, description, tags, bookmark, _id } = card;
  return fetch(`/cards/${_id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      description,
      tags,
      bookmark
    })
  }).then(res => res.json());
}

export function setLocal(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
}

export function getLocal() {
  try {
    return JSON.parse(localStorage.getItem('cards'));
  } catch (err) {
    console.log(err);
  }
}
