export default function PersonalForm({ errors }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-[30px]">Personal Information</h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="user_name" className="font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="border p-2 rounded-md"
        />
        {errors.user_name && (
          <p className="text-red-500 text-sm">{errors.user_name}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="user_email" className="font-medium">
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          className="border p-2 rounded-md"
        />
        {errors.user_email && (
          <p className="text-red-500 text-sm">{errors.user_email}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="user_phone" className="font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="user_phone"
          name="user_phone"
          className="border p-2 rounded-md"
          pattern="[0-9]{9}"
        />
        {errors.user_phone && (
          <p className="text-red-500 text-sm">{errors.user_phone}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="age" className="font-medium">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          min="1"
          max="120"
          className="border p-2 rounded-md"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="condition" className="font-medium">
          Medical Condition
        </label>
        <textarea
          id="condition"
          name="condition"
          rows={3}
          className="border p-2 rounded-md"
        />
        {errors.condition && (
          <p className="text-red-500 text-sm">{errors.condition}</p>
        )}
      </div>
    </div>
  );
}
