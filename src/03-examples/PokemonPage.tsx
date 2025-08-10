import { useCounter } from './useCounter';
import { usePokemon } from './usePokemon';

export const PokemonPage = () => {
  const { counter, increment, decrement } = useCounter();
  const { isLoading, pokemon, formattedId } = usePokemon({ id: counter });

  if (isLoading) {
    return (
      <div className='bg-gradient flex flex-col items-center'>
        <h1 className='text-2xl font-thin text-white'>Pokemon</h1>
        <h3 className='text-xl font-bold text-white'>Loading...</h3>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className='bg-gradient flex flex-col items-center'>
        <h1 className='text-2xl font-thin text-white'>Pokemon</h1>
        <h3 className='text-xl font-bold text-white'>Not Found</h3>
      </div>
    );
  }

  return (
    <div className='bg-gradient flex flex-col items-center'>
      <h1 className='text-2xl font-thin text-white'>Pokemon</h1>
      <h3 className='text-xl font-bold text-white'>
        #{formattedId} {pokemon.name}
      </h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
        alt={pokemon.name}
      />

      <div className='flex gap-2'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
          onClick={decrement}
        >
          Previous
        </button>

        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
          onClick={increment}
        >
          Next
        </button>
      </div>
    </div>
  );
};
