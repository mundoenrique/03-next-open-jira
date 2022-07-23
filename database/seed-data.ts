interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: Ullamco amet labore ullamco amet dolore sint.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'En Curso: Cupidatat commodo reprehenderit enim nisi aute incididunt.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Finalizada: Lorem ut id dolore voluptate laboris anim culpa adipisicing qui.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
