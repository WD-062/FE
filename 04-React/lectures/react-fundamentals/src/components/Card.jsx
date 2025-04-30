function Card({ user }) {
  return (
    <div class='max-w-sm rounded overflow-hidden shadow-lg'>
      <img class='w-full' src='' alt='' />
      <div class='px-6 py-4'>
        <div class='font-bold text-xl mb-2'>{user.name}</div>
        <p class='text-gray-700 text-base'>{user.email}</p>
        <p class='text-gray-700 text-base'>{user.phone}</p>
      </div>
    </div>
  );
}

export default Card;
