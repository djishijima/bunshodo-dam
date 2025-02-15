#!/bin/bash

# Run database migrations
echo "Running database migrations..."
pnpm db:migrate

# Build the application
echo "Building the application..."
NODE_OPTIONS="--max_old_space_size=4096" pnpm build
