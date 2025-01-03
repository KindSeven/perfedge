"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface BlockButtonProps {
  target: number;
}

const BlockButton: React.FC<BlockButtonProps> = ({ target }) => {
  const [count, setCount] = useState(0);

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const handleClick = () => {
    setCount(fibonacci(target));
  };

  return (
    <Button type="primary" onClick={handleClick}>
      {count ? `计算结果: ${count}` : `点击计算斐波那契前${target}项`}
    </Button>
  );
};

const BlockButtonGroup: React.FC = () => {
  return (
    <div className="flex justify-between card">
      <BlockButton target={10} />
      <BlockButton target={20} />
      <BlockButton target={30} />
      <BlockButton target={40} />
    </div>
  );
};

export default BlockButtonGroup;
