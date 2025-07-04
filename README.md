# MHScheduler

Notes:

    You can later add a patients table if needed.

    appointment_time uses TIMESTAMPTZ to allow time zone awareness.

    If appointments need to track which company reserved them, that could be a new column in appointments (reserved_by_company_id).

    You might want to enforce unique constraints like:
    UNIQUE(provider_id, appointment_time) to prevent double-booking.