import { NavbarItem } from '@/core/entities/navbar-item';

export const useNavbarItems = (): NavbarItem[] => {
  return [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Maior Desafio', href: '#maior-desafio' },
    { label: 'Princípios', href: '#principios' },
  ];
};
