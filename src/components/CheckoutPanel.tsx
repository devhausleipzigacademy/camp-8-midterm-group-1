import { Transition } from "@headlessui/react";
import { Button, ButtonVariant } from "./Button";
export type PTags = {
  type: string;
};
type InputProps = {
  seats: PTags[];
  click: () => void;
};
const pricesObject: Record<string, number> = {
  Front: 12.95,
  Middle: 14.95,
  Back: 16.95,
};

export function CheckoutPanel({ seats, click }: InputProps) {
  const typesOfSeats: string[] = [];
  seats.map((seat) => {
    if (!typesOfSeats.includes(seat.type)) {
      typesOfSeats.push(seat.type);
    }
  });
  function calculateTotalPrice(input: PTags[]) {
    let price: number = 0;
    typesOfSeats.map((type) => {
      price +=
        input.filter((seat) => seat.type == type).length * pricesObject[type];
    });
    return Math.trunc(price * 100) / 100;
  }

  return (
    <Transition
      show={seats.length > 0}
      className="py-6 px-5 flex flex-col gap-4 bg-dark-light rounded-t-3xl w-screen"
      enter="transition transform translate-y duration-[750ms]"
      enterFrom="translate-y-60"
      enterTo=""
    >
      <div className="flex flex-col gap-2">
        {typesOfSeats.map((type) => {
          return (
            <p key={type}>
              Number: {seats.filter((seat) => seat.type == type).length} type:{" "}
              {type}
            </p>
          );
        })}
      </div>
      <hr className="mb-4 text-white-dimmed-heavy" />
      <div className="grid grid-cols-3">
        <div>
          <p className="text-description">Total Price</p>
          <p className="text-title">{String(calculateTotalPrice(seats))}</p>
        </div>
        <div className="col-span-2">
          <Button
            variant={
              seats.length > 0 ? ButtonVariant.primary : ButtonVariant.secondary
            }
            label="Book Tickets"
            onClick={click}
          />
        </div>
      </div>
    </Transition>
  );
}
