const itActsAsFavoriteMenuRestaurantModel = (favoriteMenuRestaurant) => {
  it('should return the menu restaurant that has been added', async () => {
    favoriteMenuRestaurant.putRestaurant({ id: 1 });
    favoriteMenuRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteMenuRestaurant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteMenuRestaurant.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteMenuRestaurant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a menu restaurant from being added if it does not have the correct property', async () => {
    favoriteMenuRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteMenuRestaurant.getAllRestaurant())
      .toEqual([]);
  });

  it('can return all of the menu restaurant that have been added', async () => {
    favoriteMenuRestaurant.putRestaurant({ id: 1 });
    favoriteMenuRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteMenuRestaurant.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite menu restaurant', async () => {
    favoriteMenuRestaurant.putRestaurant({ id: 1 });
    favoriteMenuRestaurant.putRestaurant({ id: 2 });
    favoriteMenuRestaurant.putRestaurant({ id: 3 });

    await favoriteMenuRestaurant.deleteRestaurant(1);

    expect(await favoriteMenuRestaurant.getAllRestaurant())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a menu restaurant even though the menu has not been added', async () => {
    favoriteMenuRestaurant.putRestaurant({ id: 1 });
    favoriteMenuRestaurant.putRestaurant({ id: 2 });
    favoriteMenuRestaurant.putRestaurant({ id: 3 });

    await favoriteMenuRestaurant.deleteRestaurant(4);

    expect(await favoriteMenuRestaurant.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteMenuRestaurantModel };