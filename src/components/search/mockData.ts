export type DataResult = {
  id: string;
  title: string;
  description: string;
  modalities: string[];
  duration: string;
  source: 'Ego4D' | 'EgoDex' | 'Asimov';
  taskType: string;
  environment: string;
};

export const mockData: DataResult[] = [
  {
    id: '1',
    title: 'Folding t-shirts in laundry room',
    description: 'Demonstration of folding various t-shirts on a flat surface. Includes multiple camera angles and force sensing data.',
    modalities: ['RGB', 'IMU', 'Force/Tactile'],
    duration: '45s',
    source: 'Asimov',
    taskType: 'folding',
    environment: 'laundry',
  },
  {
    id: '2',
    title: 'Lifting boxes in warehouse',
    description: 'Picking up and moving cardboard boxes of varying sizes and weights in a warehouse environment.',
    modalities: ['RGB', 'IMU', 'Depth'],
    duration: '1m 20s',
    source: 'Ego4D',
    taskType: 'lifting',
    environment: 'warehouse',
  },
  {
    id: '3',
    title: 'Placing dishes in kitchen cabinet',
    description: 'Organizing clean dishes from dishwasher into kitchen cabinets, including plates, bowls, and cups.',
    modalities: ['RGB', 'IMU', 'Audio'],
    duration: '2m 15s',
    source: 'EgoDex',
    taskType: 'picking/placing',
    environment: 'kitchen',
  },
  {
    id: '4',
    title: 'Using screwdriver in garage',
    description: 'Assembly task using a manual screwdriver to fasten screws into wood. Multiple angles and close-ups.',
    modalities: ['RGB', 'Force/Tactile', 'Audio'],
    duration: '1m 5s',
    source: 'Asimov',
    taskType: 'tool use',
    environment: 'garage',
  },
  {
    id: '5',
    title: 'Opening and closing cabinet doors',
    description: 'Repeated demonstrations of opening various cabinet types with different handle styles.',
    modalities: ['RGB', 'IMU'],
    duration: '30s',
    source: 'Ego4D',
    taskType: 'opening/closing',
    environment: 'kitchen',
  },
  {
    id: '6',
    title: 'Sorting office supplies on desk',
    description: 'Organizing pens, paper clips, and other office items into desk organizers.',
    modalities: ['RGB', 'Depth', 'Audio'],
    duration: '1m 40s',
    source: 'EgoDex',
    taskType: 'picking/placing',
    environment: 'office',
  },
  {
    id: '7',
    title: 'Folding bath towels',
    description: 'Multiple demonstrations of folding large and small towels using different techniques.',
    modalities: ['RGB', 'IMU', 'Force/Tactile'],
    duration: '55s',
    source: 'Asimov',
    taskType: 'folding',
    environment: 'laundry',
  },
  {
    id: '8',
    title: 'Picking tools from pegboard',
    description: 'Selecting and retrieving various tools from a wall-mounted pegboard in a workshop.',
    modalities: ['RGB', 'IMU', 'Depth'],
    duration: '25s',
    source: 'Asimov',
    taskType: 'picking/placing',
    environment: 'garage',
  },
  {
    id: '9',
    title: 'Lifting and stacking containers',
    description: 'Stacking plastic storage containers of various sizes in a garage organization task.',
    modalities: ['RGB', 'IMU', 'Force/Tactile', 'Depth'],
    duration: '3m 10s',
    source: 'EgoDex',
    taskType: 'lifting',
    environment: 'garage',
  },
];
