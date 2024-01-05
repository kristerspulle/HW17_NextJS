import CreatableSelect from 'react-select/creatable';
import styles from './Select.module.css'

type SelectProps = {
  onChange: (choice) => void;
};

type TagOption = { value: string; label: string; _id: string };

type Tag = {
  _id: string;
  tag: string;
};

let tagSelectOptions: TagOption[] = [];

const getTags = async () => {
  const response = await fetch('http://localhost:3000/api/tags', {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }
  return response.json();
};

const createOptions = async () => {
  const tags = await getTags();
  return tags.map((tag: Tag) =>
    tagSelectOptions.push({ value: tag.tag, label: tag.tag, _id: tag._id })
  );
};

createOptions();


export const Select = ({ onChange }: SelectProps) => (
  <CreatableSelect
    className={styles.select}
    placeholder='Select Blog Tag'
    isClearable
    options={tagSelectOptions}
    required
    onChange={onChange}
  />
);
